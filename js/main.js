var visor = document.getElementById("visor");
var number = "";
var operador = "";

function setValue(num){
    if(number == 0){
        number = "";
    }
    number = number + "" + num;
    mostraVisor(number);
}

function somar(){
    visor.innerText+=soma.innerText;
}

function decimal(){
    number = number + "";
    if(number.search(",") === -1){
        if(number == ""){
            number = 0;
        }
        number = number + ",";
    }
    mostraVisor(number);
}

function limpar(){
    number = 0;
    mostraVisor(number);
}

function trocaSinal(){
    number = number + "";
    number = number.replace(",", ".");
    number = +number;
    number = number * -1;
    number = number + "";
    number = number.replace(".", ",");
    mostraVisor(number);
}

function resultado(){
    visor.innerText= eval(visor.innerText);
}

function mostraVisor(el){
    visor.innerText = el;
}