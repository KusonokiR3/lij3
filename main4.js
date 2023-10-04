var valorTotal = prompt("Digite um valor")
valorTotal= parseInt(valorTotal)
function calcularICMS() {
    var taxaICMS = 0.18;
    var valorICMS = valorTotal * taxaICMS;
    console.log(valorICMS)
}
calcularICMS()