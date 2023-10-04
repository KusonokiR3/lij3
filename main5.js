function calcularTabuada() {
   
    var numero = prompt("digite um número")
    numero= parseInt(numero)
    // Verificar se o usuário inseriu um número válido
    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    
    var tabuadaElemento = document.getElementById('tabuada');
    tabuadaElemento.innerHTML = '';

    
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;

        var itemLista = document.createElement('li');
        itemLista.textContent = numero + " x " + i + " = " + resultado;

        tabuadaElemento.appendChild(itemLista);
    }
}
console.log(calcularTabuada)