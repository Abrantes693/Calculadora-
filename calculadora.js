function soma () {
 const a = document.getElementById("FatorA").value;
 const b = document.getElementById("FatorB").value;

 const soma = parseInt(a) + parseInt (b);
 document.getElementById("resultado").innerText = soma

}

function subtracao () {
 const a = document.getElementById("FatorA").value;
 const b = document.getElementById("FatorB").value;

 const subtracao = parseInt(a) - parseInt (b);
 document.getElementById("resultado").innerText = subtracao

}

function multiplicacao () {
 const a = document.getElementById("FatorA").value;
 const b = document.getElementById("FatorB").value;

 const multiplicacao = parseInt(a) * parseInt (b);
 document.getElementById("resultado").innerText = multiplicacao

}

function divisao () {
 const a = document.getElementById("FatorA").value;
 const b = document.getElementById("FatorB").value;

 const divisao = parseInt(a) / parseInt (b);
 document.getElementById("resultado").innerText = divisao

}