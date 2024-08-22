let botaoImc = document.querySelector(".enviar");

function calculaImc(event) {
    event.preventDefault();
    let form = document.querySelector("#calculo_imc");

    let nome = form.nome.value;
    let idade = form.idade.value;
    let peso = parseFloat(form.peso.value);
    let altura = parseFloat(form.altura.value.replace(',', '.'));
    let imc = (peso / (altura * altura)).toFixed(2);

    let resultadoIMC = document.querySelector("#valor-imc");
    resultadoIMC.textContent = imc;

    let classificacao = document.querySelector('#valor-classificacao');
    classificacao.textContent = classificadorImc(imc);

    let riscos = document.querySelector('#valor-risco');
    riscos.textContent = identificadorRiscos(imc);
}

function classificadorImc(imc){
    let classificacao = "nada";

    if(imc < 15.99){
        classificacao = "Magreza Grave";
    } else if(imc >= 16 && imc <= 16.99){
        classificacao = "Magreza Moderada";
    } else if(imc >= 17 && imc <= 18.5){
        classificacao = "Magreza Leve";
    } else if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Saudável";
    } else if(imc >= 25 && imc <= 29.9){
        classificacao = "Sobrepeso";
    } else if(imc >= 30 && imc <= 34.9){
        classificacao = "Obesidade Grau 1";
    } else if(imc >= 35 && imc <= 39.9){
        classificacao = "Obesidade Grau 2 (Severa)";
    } else if(imc >= 40){
        classificacao = "Obesidade Grau 3 (Mórbida)";
    }
    return classificacao;
}

function identificadorRiscos(imc){
    let classificacao = "nada";

    if(imc < 15.99){
        classificacao = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfunções hormonais e sexuais.";
    } else if(imc >= 16 && imc <= 16.99){
        classificacao = "Risco alto - Anorexia, Bulimia, Osteoporose e auto consumo de massa muscular, Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfunções hormonais e sexuais.";
    } else if(imc >= 17 && imc <= 18.5){
        classificacao = "Risco moderado - Transtornos digestivos, debilidade, fadiga crônica, stress, ansiedade e disfunções hormonais.";
    } else if(imc >= 18.5 && imc <= 24.9){
        classificacao = "Baixo risco - Estado normal, bom nível de energia, vitalidade e boa condição física. Mantenha o seu peso e IMC.";
    } else if(imc >= 25 && imc <= 29.9){
        classificacao = "Risco moderado - Fadiga, problemas digestivos, problemas circulatórios, má circulação nas pernas, varizes.";
    } else if(imc >= 30 && imc <= 34.9){
        classificacao = "Risco alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações menstruais, disfunções sexuais.";
    } else if(imc >= 35 && imc <= 39.9){
        classificacao = "Risco Muito alto - Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, câncer do cólon uterino e mamário, refluxo esofágico, disfunções sexuais, discriminação social, laboral e sexual.";
    } else if(imc >= 40){
        classificacao = "Risco Muito alto - Diabetes, angina de peito, enfartes, tromboFlebites, arteroscleroses, alterações menstruais, Falta de Ar, apneia, sonolência, trombose pulmonar, úlceras varicosas, câncer do cólon uterino e mamário, refluxo esofágico, disfunções sexuais, discriminação social, laboral e sexual.";
    }
    return classificacao;
}

botaoImc.addEventListener('click', calculaImc);
