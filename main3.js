var n1 = parseInt(prompt("Digite um número para a verificação de multiplo"))
var n2 = parseInt(prompt("Digite outro número para ver se é multiplo do primeiro aé 5"))
var multiplos = (n1, n2) => {
    var saoMultiplos = false;
    if (n1 % n2 == 0) {
      saoMultiplos = true;
    }
    return saoMultiplos;
  };


