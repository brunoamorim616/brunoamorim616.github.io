pegarNum1 = function(){
    return inputs[0].value;
}
pegarNum2 = function(){
    return inputs[1].value;
}
atualizarResposta = function(){
    let num1 = pegarNum1();
    let num2 = pegarNum2();
    let soma = parseInt(num1) + parseInt(num2);
    debugger;
    resposta.textContent = num1+' + '+num2+' = '+soma;
    alert("A soma dos número digitados é "+soma);
}

//let é uma variaável local//
//pegando o elemento pelo nome do elemento//
let inputs = document.querySelectorAll('input');
//pegando elemento pela classe, com .//
let resposta = document.querySelector('.resp');
//pegando elemnto pelo ID, com o #//
let button = document.querySelector('#btnSomar');

//Espera por evento//
//Quando houver um click, a função "somar" é chamada"//
button.addEventListener('click',atualizarResposta);