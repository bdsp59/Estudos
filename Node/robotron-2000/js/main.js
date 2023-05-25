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

const controle = document.querySelectorAll('[data-controller]'); //Usamos o [] para buscar uma propriedade que nós mesmo criamos e queremos buscar

controle.forEach(ajuste => {
    ajuste.addEventListener("click", (evento) => {
        // controleDados(evento.target.textContent, evento.target.parentNode); => Usamos o textContent quando queremos pegar o conteudo de texto do elemento
        controleDados(evento.target.dataSet.controle, evento.target.parentNode); //Como começamos a utilizar a propriedade que criamos e ela já armazena os valores que vamos utilizar.

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