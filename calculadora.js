function sumar(){
    var numero1=parseInt( document.getElementById('numero1').value);
    var numero2=parseInt( document.getElementById('numero2').value);
    var suma = numero1 + numero2;
    document.getElementById('resul').innerHTML="el resultado es: "+ suma;
}
function restar(){
    var numero1=parseInt( document.getElementById('numero1').value);
    var numero2=parseInt( document.getElementById('numero2').value);
    var resta = numero1 - numero2;
    document.getElementById('resul').innerHTML="el resultado es: "+ resta;
}
function multiplicar(){
    var numero1=parseInt( document.getElementById('numero1').value);
    var numero2=parseInt( document.getElementById('numero2').value);
    var mult = numero1 * numero2;
    document.getElementById('resul').innerHTML="el resultado es: "+ mult;
}
function dividir(){
    var numero1=parseInt( document.getElementById('numero1').value);
    var numero2=parseInt( document.getElementById('numero2').value);
    var divid = numero1 / numero2;
    document.getElementById('resul').innerHTML="el resultado es: "+ divid;
}