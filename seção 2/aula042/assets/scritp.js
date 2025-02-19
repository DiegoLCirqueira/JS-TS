function calcularIMC(){
    var ipeso = document.getElementById("ipeso").value;
    var ialtura = document.getElementById("ialtura").value;
    var resultado = document.getElementById("resultado");
    
    if (ipeso > 0 && ialtura > 0){
        var imc = ipeso / (ialtura * ialtura);

        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);

        if (imc < 18.5) {
            document.getElementById("resultado").innerHTML += " (Abaixo do peso)";
        } else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById("resultado").innerHTML += " (Peso normal)";
        } else if (imc >= 25 && imc < 29.9) {
            document.getElementById("resultado").innerHTML += " (Sobrepeso)";
        } else {
            document.getElementById("resultado").innerHTML += " (Obesidade)";
        }

        resultado.classList.remove('oculto');
        resultado.classList.add('mostrar');

    }
    else {
        document.getElementById("resultado").innerHTML = "Por favor, insira valores válidos."
        resultado.classList.remove('oculto');
        resultado.classList.add('mostrar');

    }
}
