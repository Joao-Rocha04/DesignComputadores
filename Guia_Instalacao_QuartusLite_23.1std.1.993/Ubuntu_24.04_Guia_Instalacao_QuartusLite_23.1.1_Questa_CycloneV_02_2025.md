Ubuntu 24.04.1 LTS (Noble Numbat)
================================

Por: **Marco Antonio Soares de Mello Alves** (Laboratório de Arquitetura de
Computadores)

Dúvidas: **marcoasma@insper.edu.br**


Instalando
----------

Faça o download dos arquivos a seguir (salve na **mesma pasta** ***todos*** os
arquivos):

-   Quartus® Prime Lite:
    https://downloads.intel.com/akdlm/software/acdsinst/23.1std.1/993/ib_installers/QuartusLiteSetup-23.1std.1.993-linux.run

-   Questa*-Intel® FPGA:
    https://downloads.intel.com/akdlm/software/acdsinst/23.1std.1/993/ib_installers/QuestaSetup-23.1std.1.993-linux.run

-   Cyclone V (Chip usado no curso) :
    https://downloads.intel.com/akdlm/software/acdsinst/23.1std.1/993/ib_installers/cyclonev-23.1std.1.993.qdz

Abra o terminal na pasta que os arquivos foram salvos e execute os dois
comandos a seguir:

``` {.sourceCode .bash}
$ chmod +x QuartusLiteSetup-23.1std.1.993-linux.run
$ ./QuartusLiteSetup-23.1std.1.993-linux.run
```


Configurando variáveis de ambiente
----------------------------------

Adicione ao final do arquivo `bashrc` (~/.bashrc) as seguintes linhas:

``` {.sourceCode .diff}
export ALTERAPATH=$HOME/intelFPGA_lite/23.1std
export PATH=$PATH:${ALTERAPATH}/quartus/bin
export LM_LICENSE_FILE=/home/soc/intelFPGA_lite/23.1std/license_questa/license.dat
```

Se você alterou o caminho de instalação na etapa do `Quartus`, deve
modificar a primeira linha inserindo o caminho da instalação.

Configurando variáveis de ambiente
----------------------------------

``` {.sourceCode .bash}
$ gio set ~/Desktop/'Quartus (Quartus Prime 23.1std) Lite Edition.desktop' metadata::trusted true
```

Configurando o USB Blaster
--------------------------

Execute o comando a seguir para criar o arquivo de regra:

``` {.sourceCode .bash}
$ sudo gedit /etc/udev/rules.d/51-altera-usb-blaster.rules
```

Adicione as seguintes linhas a esse arquivo criado e salve:

``` {.sourceCode .diff}
SUBSYSTEM=="usb", ATTR{idVendor}=="09fb", ATTR{idProduct}=="6001", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="09fb", ATTR{idProduct}=="6002", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="09fb", ATTR{idProduct}=="6003", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="09fb", ATTR{idProduct}=="6010", MODE="0666"
SUBSYSTEM=="usb", ATTR{idVendor}=="09fb", ATTR{idProduct}=="6810", MODE="0666"
```

Recarrege o as permissões via o comando a seguir:

``` {.sourceCode .bash}
$ sudo service udev restart
```



Validando
=========

> Reinicie o computador (ou máquina virtual) para concluir a instalação

1.  **Quartus:** Escreva `quartus` no terminal, o mesmo deve abrir a
    janela do Quartus
2.  **Programador:** Com a FPGA plugadae ligada no pc, digite `jtagconfig` ele
    deve aparecer o device.

