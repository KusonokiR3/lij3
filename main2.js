var n1 = parseInt(prompt("Digite um número"))
var n2 = parseInt(prompt("Digite outro número"))
function sub (n1, n2){

 if ( n1 > n2){
   return n1 - n2
 }
 else {
   return n2 - n1
 }
}
var resultado = sub (n1,n2)
console.log(resultado)
