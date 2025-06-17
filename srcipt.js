const imcForm = document.getElementById("imcForm");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");

imcForm.addEventListener('submit', function (event){
    event.preventDefault();
    calcularIMC(peso.value, altura.value);
})

function calcularIMC(p, a){
    const conta = p / (a*a);
    let classificacao = "";
    if(conta <= 18.5){
      classificacao = "MAGROO DEMAISS";
      resultado.innerHTML = `Seu peso ${p},Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
    }
    else if(conta <= 24.9){
     classificacao = "MAGRO";
     resultado.innerHTML = `Seu peso ${p}, Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
    }
    else if(conta <= 29.9 ){
    classificacao = "Normauuuuuu";
    resultado.innerHTML = `Seu peso ${p}, Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
    }
    else if(conta <= 34.9){
    classificacao = "gordinho gostoso";
    resultado.innerHTML = `Seu peso ${p}, Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
    }
    else if(conta <= 39.9){
    classificacao = "GORDOO";
    resultado.innerHTML = `Seu peso ${p}, Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
    }
   else if(conta >= 40){
    classificacao = "MEGAAAAAA";
     resultado.innerHTML = `Seu peso ${p}, Sua altura é ${a}, Seu IMC é: ${conta.toFixed(2)} - ${classificacao}`
   }

    console.log(`Seu peso é ${p}, sua altura é ${a}, seu IMC é ${conta}, e seu nível é ${classificacao}`);
}