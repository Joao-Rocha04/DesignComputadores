#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Assembler para arquitetura acumulador (INSPER) com suporte a labels e operandos em binário de 9 bits.
Gera BIN.txt, onde cada instrução tem o opcode (hex, 1 dígito) e o operando (binário, 9 bits), mantendo o comentário original ao lado da instrução e anotando definições de labels.
"""

import re

# Arquivos de entrada e saída
inputASM = 'ASM.txt'
outputBIN = 'BIN.txt'

# Dicionário de mnemônicos para OPCODE (hexadecimal de 1 dígito)
mne = {
    "NOP": "0",
    "LDA": "1",
    "SOMA": "2",
    "SUB": "3",
    "LDI": "4",
    "STA": "5",
    "JMP": "6",
    "JEQ": "7",
    "CEQ": "8",
    "JSR": "9",
    "RET": "A",
}

# Regex para detectar labels (linhas como "label:" ou ".label:")
label_pattern = re.compile(r'^(?P<label>\.?\w+):$')


def int_to_bin9(val: int) -> str:
    """Converte inteiro [0,511] para string binária de 9 bits."""
    if val < 0 or val > 511:
        raise ValueError(f"Valor {val} fora do intervalo [0,511] para 9 bits.")
    return format(val, '09b')

# 1ª passagem: coletar labels e suas posições (endereços)
labels = {}
pc = 0
with open(inputASM, 'r') as f:
    for raw in f:
        line = raw.split('#', 1)[0].strip()
        if not line:
            continue
        m = label_pattern.match(line)
        if m:
            name = m.group('label').lstrip('.')
            labels[name] = pc
        else:
            pc += 1

# 2ª passagem: gerar BIN.txt com opcode hex e operando binário, mantendo instrução + comentário
pc = 0
with open(inputASM, 'r') as f, open(outputBIN, 'w') as outf:
    for raw in f:
        raw_line = raw.rstrip('\n')
        # separa instrução e comentário preservando instrução completa
        if '#' in raw_line:
            parts = raw_line.split('#', 1)
            code = parts[0].strip()
            comment_line = code + "\t#" + parts[1]
        else:
            code = raw_line.strip()
            comment_line = code

        # ignora vazias ou apenas comentários
        if not code or code.startswith('#'):
            continue

        # detecta definição de label e anota no BIN
        m = label_pattern.match(code)
        if m:
            name = m.group('label').lstrip('.')
            addr = labels[name]
            comment = f'Label {name} definida em endereço {addr}'
            outf.write(f'-- {comment}\n')
            print(f'-- {comment}\n', end='')
            continue

        # processa instrução normal
        tokens = code.split()
        mnemonic = tokens[0].upper()
        if mnemonic not in mne:
            raise KeyError(f"Mnêmônico desconhecido '{mnemonic}' na linha: {raw_line}")
        opcode = mne[mnemonic]

        # calcula valor do operando (imediato ou label)
        if len(tokens) > 1:
            oper = tokens[1]
            if oper.startswith('@') or oper.startswith('$'):
                num = int(oper[1:])
            else:
                name = oper.lstrip('.')
                if name not in labels:
                    raise KeyError(f"Label '{name}' não definido antes da linha: {raw_line}")
                num = labels[name]
        else:
            num = 0
        operand_bin = int_to_bin9(num)

        # monta saída no formato VHDL
        line_out = f'tmp({pc}) := x"{opcode}" & b"{operand_bin}";\t-- {comment_line}\n'
        outf.write(line_out)
        print(line_out, end='')
        pc += 1
