
function contar(){
var inicio = document.getElementById('txt1')
var fim = document.getElementById('txt2')
var passo = document.getElementById('txt3') 

if (inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ){
    res.innerHTML = ('sem contagem')
    window.alert('[ERRO]Faltam dados!')
} else {


    res.innerHTML = ('Contando... ')
var i = Number(inicio.value)
var f = Number(fim.value)
var p = Number(passo.value)

for (var ini = i ; ini <= f ; ini += p){
    
    res.innerHTML += `${ini} `;
}

for (var ife = i ; ife >= f ; ife -= p){
    
    res.innerHTML += `${ife} `;
 }
 
}
}

/* res.innerHTML = `Detectamos ${iniciu.value}` } */

/*


var passe = Number(passo)

var inicio = '1'
var fim = '10'
var passo = '2'

for (var iniciu = inicio ;iniciu < fim ; iniciu += passe){
    console.log (iniciu)
    
    } */