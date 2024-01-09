const calcular = document.querySelector('#calcular')

function IMC() {
    const nome = document.querySelector('#nome').value;
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;
    const resultado = document.querySelector('#resultado');

    
    if (nome !== '' && peso !== '' && altura !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';
        
        if (valorIMC < 14.5) {
            classificacao = 'Voce está desnutrido(a)!';

        }
        else if (valorIMC < 18.5) {
            classificacao = 'Voce está abaixo do peso!';
            
        }

        else if (valorIMC < 25) {
            classificacao = 'Seu peso é considerado normal'

        }
        else if (valorIMC < 30) {
            classificacao = 'Seu peso é considerado acima do normal, SOBREPESO!';
        }

        else if (valorIMC < 40) {
            classificacao = 'Seu peso é considerado acima do normal, OBESO! CUIDADO!';

        }

        else { classificacao = 'Obesidade morbida procure um médico o mais rápido possível!' }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}  ${classificacao}`; 
        

    }
    else { resultado.textContent = 'Preencha todos os dados!' }

}


calcular.addEventListener('click', IMC) 