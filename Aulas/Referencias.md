
# Referências

<button class="accordion">Curso, Avaliações e Ponderação</button>
<div class="panel">

### Curso

#### Objetivos:

Ao final da disciplina o aluno será capaz de:

1. Projetar um processador de 32 bits, com um conjunto de instruções determinado, que pode ser aplicado a problemas reais de escopo limitado.

2. Representar um projeto digital em linguagem de descrição de hardware (VHDL).

3. Simular circuitos digitais para identificar problemas e avaliar o desempenho.

4. Aplicar as técnicas mais comuns de depuração de hardware.

5. Prototipar o processador, e outros projetos, em lógica programável com FPGA.

6. Escrever código em linguagem de montagem, e máquina, para a arquitetura implementada.

**Metodologia:**

<!--  -   Analisar os requisitos da organização, de processadores, necessários para atender uma dada arquitetura; -->
-   Analisar as instruções necessárias para executar uma dada tarefa (projeto) e inferir a estrutura necessária para a execução delas;

-   Aplicar a abstração Unidade de Controle e Fluxo de Dados (UC+FD);

-   Implementar, através de VHDL, e depurar o circuito criado;

-   Propor melhorias que aumentem o desempenho.

**Ferramentas:**

-   CAD para desenvolvimento de hardware:

    -   Com suporte para VHDL;

    -   Gravação em FPGA;

    -   Simulação de circuitos.

-   Kit Desenvolvimento com FPGA:

    -   Com 49K Elementos Lógicos Programáveis na FPGA;

    -   3080 Kbits memória embarcada na FPGA;

    -   Diversos periféricos na placa do kit.

**Justificativa:**

Por quê projetar um microprocessador personalizado?

Para aplicações específicas, por exemplo, onde o cálculo pode ser acelerado através de instruções adequadas, como equações diferenciais ou criptografia.

No nosso caso, o conhecimento de três tópicos de engenharia de computação auxiliam em muito o entendimento das outras tecnologias envolvidas. Eles são:

-   Entender o funcionamento da CPU e seus blocos construtivos;

-   Entender o funcionamento dos sistemas operacionais;

-   Entender o funcionamento dos compiladores.

Além disso, o projeto de uma CPU desenvolve habilidades que serão úteis no projeto de qualquer circuito digital.

<!-- Entender os problemas envolvidos na criação de um conjunto de instruções. -->

### Avaliações

O curso contará com as seguintes formas de avaliação:

-   Dois projetos:

    -   Cada um com uma entrega intermediária e uma final.

        -   **Em cada entrega final, haverá arguição indiviual dos componentes do grupo para verificar o conhecimento e a participação na execução do projeto.**

        -   O resultado da arguição pode gerar notas diferentes para os participantes do grupo.

    -   Algumas entregas parciais, sem uma frequência determinada, de partes do projeto ou atividades.

        -   **Essas entregas parciais serão avaliadas, no caso do aluno não alcançar a média final (AG), com o limite de 0,3 pontos.**

        -   **Caso ainda haja dúvida na proficiência, do aluno, em VHDL, poderá ser proposto um teste de VHDL.**

    -   <font style="color:red">Alunos de DP farão os projetos individualmente, ou seja, não participarão de nenhum grupo. </font>

-   Quizzes de verificação e participação nas aulas:

    -   Pode ser um ou mais por aula (dependendo dos temas abordados);

    -   Possuem uma pergunta sobre o conteúdo explicado na aula e com duração máxima de 5 minutos.

-   Quizzes a cada duas semanas (apelidado de _quizinho_):

    -   Terão duração máxima de 20 minutos e o conteúdo das semanas anteriores ou pré-leitura.

    -   Material de consulta:

        -   [VHDL Quick Reference Card da Synthworks][VQRCSynthworks].

        -   [VHDL Types & Package Quick Reference Card da Synthworks][VTPQRCSynthworks].

        -   _**Green Card**_, um resumo de [referência sobre o MIPS][greenCard].

-   Dois quizzes, um a cada bimestre (apelidado de _quizão_):

    -   Serão mais trabalhosos, podendo durar até 2hs, e com o conteúdo do bimestre.

    -   Material de consulta:

        -   **Uma folha A4 com anotações na frente e verso**.

        -   [VHDL Quick Reference Card da Synthworks][VQRCSynthworks].

        -   [VHDL Types & Package Quick Reference Card da Synthworks][VTPQRCSynthworks].

        -   _**Green Card**_, um resumo de [referência sobre o MIPS][greenCard].

Os dois projetos fazem parte das Atividades Práticas Supervisionadas (APS), como mostrado abaixo.

|Atividade|Observação|
|:--------------------|:-------------|
|Processador com arquitetura ACUMULADOR e aplicação em um contador (entrega intermediária).|Executado parcialmente em horário de aula.|
|Projeto 1: Calculadora/Relógio ou outro equipamento a ser definido.|Executado parcialmente em horário de aula.|
|MIPS de ciclo único (entrega intermediária).|Executado parcialmente em horário de aula.|
|Projeto 2: Processador MIPS, de 32 bits, com pipeline.|Executado parcialmente em horário de aula.|

Table: **Atividades Práticas Supervisionadas (APS)**

> **As entregas parciais, ou atividades, não participam do cálculo da nota final. A avaliação de todas entregas, para os alunos que ficaram abaixo da média de aprovação, poderá adicionar, no máximo, 0,3 pontos na média final.**

### Ponderação

O curso terá dois conceitos, um para as avaliações individuais (AI) e outro para as avaliações em grupo (AG).

Para se obter um conceito satisfatório em AG, a entrega final do **projeto 2 não pode ter avaliação <font style="color:red">igual ou inferior a D</font>**.

Um conceito final satisfatório envolve a aprovação, de forma independente, nos dois conceitos.

Caso haja aprovação tanto em AI quanto em AG, a nota final será dada pela ponderação de **AI (60%)** e **AG (40%)**.

**Caso não haja aprovação em AI, ou em AG, a nota final será dada pela menor nota entre AI e AG.**

Os quizzes de participação possuem um caráter de nota bonus, ou seja, será adicionado, até um (1) ponto, à média final das avaliações individuais (AI).

O resultado da participação é a normalização das notas e possui cinco faixas:

- Adiciona zero pontos para os alunos dentro da faixa de notas entre 0% e 40% da normalização;

- Adiciona 0,25 pontos para os alunos dentro da faixa de notas entre 41% e 50% da normalização;

- Adiciona 0,5 pontos para os alunos dentro da faixa de notas entre 51% e 75% da normalização;

- Adiciona 0,75 pontos para os alunos dentro da faixa de notas entre 76% e 90% da normalização;

- Adiciona 1 ponto para os alunos dentro da faixa de notas entre 91% e 100% da normalização.


|Nome da Avaliação|Peso na Nota Final de AI (%)|Observação|
|:----------|:-----:|:------:|
|Quiz (2 semanas)|30|A média das notas de N-1 desses quizzes|
|Quiz 1. |30||
|Quiz 2. |40||
Table: **Pesos das Avaliações Individuais**

|Nome da Avaliação|Peso na Nota Final de AG (%)|Observação|
|:----------------------|:-------:|:------------|
|Processador com arquitetura ACUMULADOR e aplicação em um contador (entrega intermediária).|15||
|Projeto 1: Calculadora/Relógio/Outro.|25||
|MIPS de ciclo único (entrega intermediária).|20||
|Projeto 2: Processador MIPS, de 32 bits, com pipeline.|40|O grupo não poderá ter conceito D, ou abaixo, nesta entrega|
Table: **Pesos das Avaliações em Grupo**

Somente para referência, temos abaixo, o valor ponderado de cada avaliação na criação da nota final:

> Note que a ponderação abaixo está condicionada aos critérios de aprovação mostrados anteriormente.

|Nome da Avaliação|Peso na Nota Final (%)|Observação|
|:----------------|:-----:|:--------------|
|Quiz (2 semanas) |18|A média das notas de N-1 desses quizzes|
|Quiz 1. |18||
|Quiz 2. |24||
|Processador da Projeto 1 (entrega intermediária).|6||
|Projeto 1: Calculadora/Relógio/Outro.|10||
|MIPS de ciclo único (entrega intermediária).|8||
|Projeto 2: Processador MIPS, de 32 bits, com pipeline.|16|O grupo não poderá ter conceito D, ou abaixo, nesta entrega|
Table: **Pesos das Avaliações**

Alunos com frequência inferior a 75% serão reprovados automaticamente.

A presença está vinculada à entrega da APS.

**Correlação das Notas Numéricas e as Letras de Engenharia:**

|Letra|Valor|
|:---:|:---:|
|A+|10|
|A|9|
|B+|8|
|B|7|
|C+|6|
|C|5|
|D|4|
|I|0|

</div><!--- class_panel Avaliacoes--->

<button class="accordion">Entrega de Atividades</button>
<div class="panel">

### Organização

As atividades de programação devem respeitar os seguintes critérios:

-   **Entrega individual ou em grupo, deve ser somente através do blackboard﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿:**

    -   <font style="color:red;font-size:20px;font-weight:bold;">As entregas por e-mail, dentro ou fora do prazo, NÃO SERÃO ACEITAS</font>.

    -   <font style="color:red;font-size:20px;font-weight:bold;">Entregas com referência ao github, ou qualquer tipo de repositório, dentro ou fora do prazo, NÃO SERÃO ACEITAS</font>.

-   Os arquivos em VHDL devem ser comentados.

-   Ao criar o projeto, mantenha todos os arquivos relevantes [(VHDL, QSF, SDC, MIF e VWF)﻿﻿﻿﻿﻿﻿﻿﻿﻿][usoQuartus] no diretório raíz do projeto.

A forma mais simples de entrega é através da geração de um "arquivamento" do projeto, que criará um arquivo com extensão "_qar_" contendo todo o projeto.

Essa opção está no menu do Quartus:  "Project" > "Archive Project".

O resultado é a criação, no diretório do projeto do Quartus, de dois arquivos: <font style="color:red">\<nome_do_projeto\>.qar</font> e <font style="color:red">\<nome_do_projeto\>.qarlog</font>.

Basta enviar esses dois arquivos - pode ser zipado.

### Captura da Tela de Simulação

É boa prática adicionar as capturas do resultado das simulações (somente as mais relevantes).

Isso ajuda a verificar o funcionamento do seu projeto.

<br>

**Dúvidas sobre uso do Quartus e sobre os arquivos:** acesse a página interna sobre o [Quartus][usoQuartus].

**Por favor, leia a página de orientações sobre [integridade intelectual][integridadeIntelectual] nas atividades de programação.**

</div><!--- class_panel --->

<button class="accordion">Quartus</button>
<div class="panel">

[Referência rápida][refQuartus] (página interna: em eterna construção).

Quartus Prime Standard Edition [User Guides][UGuides].

</div><!--- class_panel --->

<button class="accordion">Lógica Digital</button>
<div class="panel">

Livro (free) [Digital McLogic Design][freeRangeTutoriais] da Free-Range.

<!-- Editor de lógica booleana, [Logic Friday][logicFriday], que otimiza, analisa e faz a síntese do circuito. A entrada pode ser a equação, a tabela da verdade ou o circuito. É para Windows mas instalei no Ubuntu usando o _Wine_. -->

</div><!--- class_panel --->

<button class="accordion">VHDL</button>

<div class="panel">

[Livro, Free-Range-VHDL-book (open source), sobre VHDL][freeRangeVHDL].

[Referência Rápida VHDL][vhdlBasico] (página interna: em eterna construção).

[VHDL Quick Reference Card da Synthworks][VQRCSynthworks]: **permitido usar em quiz**.

[VHDL Types & Package Quick Reference Card da Synthworks][VTPQRCSynthworks]: **permitido usar em quiz**.

[Resumo de VHDL em PDF][ehwangVHDL] (retirado de http://faculty.lasierra.edu/~ehwang/digitaldesign/contents/vhdl.pdf).

</div><!--- class panel --->

<button class="accordion">MIPS e MIPS DLX</button>
<div class="panel">

_**Green Card**_, um resumo de [referência sobre o MIPS][greenCard] (todas instruções e outros detalhes - download gratuito no site da editora): **permitido usar em quiz**.

Resumo (interno) da [arquitetura do MIPS][ArquiteturaDLX].

[Instruções][instrucoesDLX] que serão implementadas.

[MIPS Converter][MIPSConverter]: site que monta a instrução em binário a partir do mnemônico.

[Apêndice C][appendix_C] do livro texto. Trata do projeto lógico e dos componentes: ULA, Memória, MEF e temporização.

[Apêndice D][appendix_D] do livro texto. Trata de unidade de controle, MEF combinacional e MEF com ROM.

Livro gratuito sobre o [QtSpim][qtspim], explica o simulador e o assembly do MIPS.

</div><!--- class_panel --->

<button class="accordion">Extras do Livro Texto</button>
<div class="panel">

[Todo material][resourcesCOD4Ed] em um arquivo compactado.

</div><!--- class_panel --->

</div>

<br>
[Ferramentas][Ferramentas]
<br>

<script type="text/javascript" src="./js/acordeon.js"></script>

<!-- FIM -->

<!---
######### (inicio dos links) ##########
--->

[vhdlBasico]: ./vhdl/_vhdlBasico.html {target="_blank"}

[vhdlOnLine]: http://www.vhdl-online.de {target="_blank"}

[intelVHDLSupport]: https://www.altera.com/support/support-resources/design-examples/design-software/vhdl.html  {target="_blank"}

[renertaVHDLRefGuide]: http://vhdl.renerta.com  {target="_blank"}

[VHDL-LearnByExample]: http://esd.cs.ucr.edu/labs/tutorial/   {target="_blank"}

[designExamplesIntel]: https://www.altera.com/support/support-resources/design-examples.html  {target="_blank"}

[VHDLTutorialElsevier]: ./livro/vhdl-tutorial.pdf   {target="_blank"}

[freeRangeVHDL]: ./livro/free_range_vhdl-Mealy-Tappero-v1_21-2018.pdf  {target="_blank"}

<!---
./livro/DigitalMcLogicDesign-BryanJMealy-JamesTMealy-CreativeCommons-2012.pdf {target="_blank"}
http://github.com/fabriziotappero/Free-Range-VHDL-book   {target="_blank"} --->

[freeRangeTutoriais]:  ./livro/DigitalMcLogicDesign-BryanJMealy-JamesTMealy-CreativeCommons-2012.pdf {target="_blank"}

<!--- http://freerangefactory.org/books_tuts.html   {target="_blank"} --->

<!-- [manualV1]: https://www.altera.com/documentation/mwh1409960181641.html   {target="_blank"}
[manualV2]: https://www.altera.com/documentation/mwh1410471376527.html   {target="_blank"}
[manualV3]: https://www.altera.com/documentation/mwh1410385117325.html   {target="_blank"}-->

[UGuides]: https://www.intel.com/content/www/us/en/programmable/products/design-software/fpga-design/quartus-prime/user-guides.html {target="_blank"}

[intelLiteratura]: https://www.intel.com/content/www/us/en/programmable/documentation/lit-index.html   {target="_blank"}

[refQuartus]: ./quartus/_referenciaQuartus.html   {target="_blank"}

[componentesVHDL]: ./vhdl/_componentesVHDL.html   {target="_blank"}

[ehwangVHDL]: ./livro/vhdl.pdf   {target="_blank"}

<!--- http://faculty.lasierra.edu/~ehwang/digitaldesign/contents/vhdl.pdf   {target="_blank"}*/ --->

[mapK]: http://www.32x8.com/   {target="_blank"}

<!-- [resourcesCOD4Ed]: https://booksite.elsevier.com/9780123747501/downloads/Resources.zip {target="_blank"} -->

[resourcesCOD4Ed]: ./livro/Resources.zip {target="_blank"}

[VQRCSynthworks]: ./livro/vhdl_quickref.pdf   {target="_blank"}

[VTPQRCSynthworks]:  ./livro/type_pkg_quickref.pdf   {target="_blank"}

[editorFSM]: http://madebyevan.com/fsm/   {target="_blank"}

<!-- [MSQRCSynthworks]: http://www.synthworks.com/downloads/modelsim_quickref.pdf    {target="_blank"}

[MSTSynthworks]: http://www.synthworks.com/downloads/modelsim_tutorial.pdf   {target="_blank"} -->

[logicFriday]: http://sontrak.com/index.html   {target="_blank"}

[ArquiteturaDLX]: ./MIPS/_arquitetura.html   {target="_blank"}

[qtspim]: http://www.egr.unlv.edu/~ed/mips.html   {target="_blank"}

[instrucoesDLX]: ./MIPS/_instrucoesDLX.html   {target="_blank"}

[appendix_C]: ./livro/Apendice_C-ProjetoLogico.pdf  {target="_blank"}

[appendix_D]: ./livro/Apendice_D-UnidadeControle.pdf  {target="_blank"}

[greenCard]: ./livro/COD_5e_Greencard.pdf  {target="_blank"}

[mipsWPedia]: https://en.wikipedia.org/wiki/MIPS_architecture {target="_blank"}

[DLXWPedia]: https://en.wikipedia.org/wiki/DLX {target="_blank"}

[arquivosQuartus]: ./quartus/_tiposArquivos.html

[usoQuartus]: quartus/_referenciaQuartus.html

[integridadeIntelectual]: https://tinyurl.com/comp-insper-atividades

[DE0-CV_QSFminimo]: quartus/DE0-CV_QSF_minimo.txt  {target="_blank"}

[AssemblerPython]: Projetos/AssemblerMIPSv2.zip  {target="_blank"}

[Ferramentas]: ./Ferramentas.html   {target="_blank"}

[MIPSConverter]: https://www.eg.bucknell.edu/~csci320/mips_web/ {target="_blank"}
