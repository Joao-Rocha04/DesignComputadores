// Funcoes para trabalhar com binario.

// Javascritp: a maior representacao binaria possivel = 32 bits.
function converteSignedDecimal(binStr) {
  // Se o bit MSB, que quando se usa string é o bit na posição ZERO (binStr[0]), for 1: estende 1 caso contrario: estende 0.
  binStr = binStr[0]==="1"? binStr.padStart(32,"1"): binStr.padStart(32,"0");
  // O shift de ZERO posicoes força conversão para 32 bits:
  return parseInt(binStr,2) >> 0
}

function converteUnsignedDecimal(binStr) {
  // Unsigned: sempre faz a extensao de sinal com ZERO.
  binStr.padStart(32,"0");
  return parseInt(binStr,2) >> 0
}

// Verifica se a entrada esta em binario.
function validaBinario(nome) {
    var valor, tamanho, i;
    document.getElementById(nome).style.color = "black";
    valor = document.getElementById(nome).value;
    tamanho=valor.length;
    for (i=0;i<tamanho; i=i+1){
        if ( valor[i] != 1 && valor[i] != 0 ){
            document.getElementById(nome).style.color = "red";
            //document.getElementById(nome).value = "";
            alert("O valor deve ser 0 ou 1");
        }
    }
}

// Verifica se a entrada esta em binario.
function mostraEquacao(nome, sid) {
    var valor, tamanho, i;
    validaBinario(nome);
    valor = document.getElementById(nome).value;
    if (valor[0] == 1){
        document.getElementById(sid).style.display = "";
    } else {
        document.getElementById(sid).style.display = "none";
    }
}

function limpaTabelaSomaProdutos() {
    //alert("Entrou no limpaTabelaVerdade()");
    document.getElementById("s0").value="";
    document.getElementById("s00").style.display = "none";
    document.getElementById("s1").value="";
    document.getElementById("s01").style.display = "none";
    document.getElementById("s2").value="";
    document.getElementById("s02").style.display = "none";
    document.getElementById("s3").value="";
    document.getElementById("s03").style.display = "none";
    document.getElementById("s4").value="";
    document.getElementById("s04").style.display = "none";
    document.getElementById("s5").value="";
    document.getElementById("s05").style.display = "none";
    document.getElementById("s6").value="";
    document.getElementById("s06").style.display = "none";
    document.getElementById("s7").value="";
    document.getElementById("s07").style.display = "none";
    document.getElementById("s8").value="";
    document.getElementById("s08").style.display = "none";
    document.getElementById("s9").value="";
    document.getElementById("s09").style.display = "none";
    document.getElementById("s10").value="";
    document.getElementById("s010").style.display = "none";
    document.getElementById("s11").value="";
    document.getElementById("s011").style.display = "none";
    document.getElementById("s12").value="";
    document.getElementById("s012").style.display = "none";
    document.getElementById("s13").value="";
    document.getElementById("s013").style.display = "none";
    document.getElementById("s14").value="";
    document.getElementById("s014").style.display = "none";
    document.getElementById("s15").value="";
    document.getElementById("s015").style.display = "none";
}

function limpaTabelaVerdade() {
    document.getElementById("s0000").textContent = "";
    document.getElementById("s0001").textContent = "";
    document.getElementById("s0010").textContent = "";
    document.getElementById("s0011").textContent = "";
    document.getElementById("s0100").textContent = "";
    document.getElementById("s0101").textContent = "";
    document.getElementById("s0110").textContent = "";
    document.getElementById("s0111").textContent = "";
    document.getElementById("s1000").textContent = "";
    document.getElementById("s1001").textContent = "";
    document.getElementById("s1010").textContent = "";
    document.getElementById("s1011").textContent = "";
    document.getElementById("s1100").textContent = "";
    document.getElementById("s1101").textContent = "";
    document.getElementById("s1110").textContent = "";
    document.getElementById("s1111").textContent = "";

    document.getElementById("s00a").textContent = "";
    document.getElementById("s01a").textContent = "";
    document.getElementById("s10a").textContent = "";
    document.getElementById("s11a").textContent = "";
}

// APAGAR ESTA FUNCAO:
function HexBin(number){
  //alert (number);
  //alert (number.value);
  var fromBase = 16;
  var toBase = 2;
  var numberInDecimal = parseInt(number.value, fromBase);
  var saida = (parseInt(numberInDecimal)).toString(toBase);
  var organizado="";
  var total = (saida.length)%4 + 1;
  var resto = (saida.length)%4;
  if ((saida.length)%4 != 0){
//    alert("Comprimento: "+ saida.length + "\nnao eh multiplo de 4\nTotal= "+total);
    for (i=0; i < (4-resto); i++) {
      organizado += "0";
    }
  }
  for (i=0; i < saida.length; i++) {
//    alert("Posicao["+ i +"] = " + saida[i]);
    if ((saida.length-i)%4 == 0){
      organizado += " " + saida[i];
    } else {
      organizado +=  saida[i];
    }
  };
//  alert (organizado);
  document.getElementById("resulttxt").value = organizado;
  document.getElementById("baseresult").innerHTML = "(" + number.value + ")<sub>16</sub>  =  (" + organizado + ")<sub>2</sub>";
}

// ACERTAR ESTA:
function geraEquacao(number, base){
//  var fromBase = 16;
  var fromBase = base;
  var toBase = 2;
  var numberInDecimal = parseInt(number.value, fromBase);
  var saida = (parseInt(numberInDecimal)).toString(toBase);
//  var organizado="";
  var equacao="";
  var posicao = 0;
  var equac=saida.replace(/\s/g,'');

//  alert ("Tamanho = "+equac.length);

  for (i=0; i < equac.length; i++) {
    posicao = equac.length - 1 - i;
    switch (equac[i]) {
      case "0":
        if (i==0){
          equacao += "(not A"+posicao+")";
        } else {
          equacao += " and (not A"+posicao+")";
      }
        break;
      case "1":
        if (i==0){
          equacao += "(A"+posicao+")";
        } else {
          equacao += " and (A"+posicao+")";
      }
        break;
      default:
    }
  }
  alert ("Equacao = "+equacao);
  // Fazer o retorno da Equacao:
  return equacao;
  //document.getElementById("Equation").innerHTML = equacao;
}


function atualizaTabela() {
    var Operador = document.getElementById("selectOperation").value;
    //alert("Valor de entrada: "+ Operador);
    document.getElementById("s0000").textContent = calcBoolean(false, false, false, false, Operador);
    document.getElementById("s0001").textContent = calcBoolean(false, false, false, true, Operador);
    document.getElementById("s0010").textContent = calcBoolean(false, false, true, false, Operador);
    document.getElementById("s0011").textContent = calcBoolean(false, false, true, true, Operador);
    document.getElementById("s0100").textContent = calcBoolean(false, true, false, false, Operador);
    document.getElementById("s0101").textContent = calcBoolean(false, true, false, true, Operador);
    document.getElementById("s0110").textContent = calcBoolean(false, true, true, false, Operador);
    document.getElementById("s0111").textContent = calcBoolean(false, true, true, true, Operador);
    document.getElementById("s1000").textContent = calcBoolean(true, false, false, false, Operador);
    document.getElementById("s1001").textContent = calcBoolean(true, false, false, true, Operador);
    document.getElementById("s1010").textContent = calcBoolean(true, false, true, false, Operador);
    document.getElementById("s1011").textContent = calcBoolean(true, false, true, true, Operador);
    document.getElementById("s1100").textContent = calcBoolean(true, true, false, false, Operador);
    document.getElementById("s1101").textContent = calcBoolean(true, true, false, true, Operador);
    document.getElementById("s1110").textContent = calcBoolean(true, true, true, false, Operador);
    document.getElementById("s1111").textContent = calcBoolean(true, true, true, true, Operador);

    document.getElementById("s00a").textContent = calcBoolean2(false, false, Operador);
    document.getElementById("s01a").textContent = calcBoolean2(false, true, Operador);
    document.getElementById("s10a").textContent = calcBoolean2(true, false, Operador);
    document.getElementById("s11a").textContent = calcBoolean2(true, true, Operador);
}

function calcBoolean(E3, E2, E1, E0, Operador) {
    var resultado="";
    var teste = "";
    switch (Operador) {
      case "vAND":
        teste = Boolean (E3 && E2 && E1 && E0);
        break;
      case "vNAND":
        teste = Boolean (!(E3 && E2 && E1 && E0));
        break;
      case "vOR":
        teste = Boolean (E3 || E2 || E1 || E0);
        break;
      case "vNOR":
        teste = Boolean (!(E3 || E2 || E1 || E0));
        break;
      case "vXOR":
        teste = Boolean ((E3 ? 1 : 0) ^ (E2 ? 1 : 0) ^ (E1 ? 1 : 0) ^ (E0 ? 1 : 0));
        break;
      case "vXNOR":
        teste = Boolean (!((E3 ? 1 : 0) ^ (E2 ? 1 : 0) ^ (E1 ? 1 : 0) ^ (E0 ? 1 : 0)));
        break;
      default:
         teste = false;
    }
    if (teste) {
        resultado = "1";
    } else {
        resultado = "0";
    }
    //alert("Resultado: "+ resultado);
    return resultado;
}
function calcBoolean2(E1, E0, Operador) {
    var resultado="";
    var teste = "";
    switch (Operador) {
      case "vAND":
        teste = Boolean (E1 && E0);
        break;
      case "vNAND":
        teste = Boolean (!(E1 && E0));
        break;
      case "vOR":
        teste = Boolean (E1 || E0);
        break;
      case "vNOR":
        teste = Boolean (!(E1 || E0));
        break;
      case "vXOR":
        teste = Boolean ((E1 ? 1 : 0) ^ (E0 ? 1 : 0));
        break;
      case "vXNOR":
        teste = Boolean (!((E1 ? 1 : 0) ^ (E0 ? 1 : 0)));
        break;
      default:
         teste = false;
    }
    if (teste) {
        resultado = "1";
    } else {
        resultado = "0";
    }
    //alert("Resultado: "+ resultado);
    return resultado;
}
