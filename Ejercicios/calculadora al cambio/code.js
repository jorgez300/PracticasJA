function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 8.38;
    var bs = 8.38;
    if (document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio de Bolivares a Dolares es: $" + resultado.toFixed(2));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore * bs;
        alert("El cambio de Dolares a Bolivares es: bs " + resultado.toFixed(2));
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}