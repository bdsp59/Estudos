//Quando declaramos uma função dessa forma, ela é dita como não nomeada,
// uma função que será executada nesse momento, mas que não podemos chamar em nenhum outro momento.
document.querySelector('.robo').addEventListener("click", function() { //Podemos usar ", () => {}" no local do function 
    console.log("Eu cliquei no robo");
});

function helloWorld(){
    console.log("Hello World");
}

helloWorld();

//------------------------------------------------------//

const controle = document.querySelectorAll("[data-controller]"); //Usamos o [] para buscar uma propriedade que nós mesmo criamos e queremos buscar
const estatistica = document.querySelectorAll("[data-estatistica]");

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach(ajuste => {
    ajuste.addEventListener("click", (evento) => {
        // controleDados(evento.target.textContent, evento.target.parentNode); => Usamos o textContent quando queremos pegar o conteudo de texto do elemento
        controleDados(evento.target.dataset.controller, evento.target.parentNode); //Como começamos a utilizar a propriedade que criamos e ela já armazena os valores que vamos utilizar.
        atualizaEstatistica(evento.target.dataset.peca);
    });
});

// somar.addEventListener('click', (evento) => {
//     console.log("Somar: " + evento);
//     //Como foi apenas mais 1, o ++ serve diretamente para a soma, mas se for utilizar += tem que primeiro garantir que sejam dois ints,
//     //pois se um elemento for String o JS vai converter tudo para String e concatenar.
//     //parseInt(braco.value) += 1;
//     braco.value++;
// });

function controleDados(operacao, elementoControle){
    const peca = elementoControle.querySelector("[data-contador]");
    if(operacao === '+'){
        peca.value++;
    }else if(operacao === '-'){
        peca.value--;
    }
};

function atualizaEstatistica(peca){
    console.log(pecas[peca]);
    estatistica.forEach(elemento => {
        console.log(elemento.dataset.estatistica);
        console.log(elemento.textContent);
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}