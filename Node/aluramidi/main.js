/*function playSoundPom(){
    document.querySelector('#som_tecla_pom').play();
}
// Javascript é case sensitive => Existe diferença entre A e a;
//Temos que fazer a referência para a função sem os () para garantir que o valor receba a função e não executar a função. Somente devemos executar quando o onclick ocorrer.
document.querySelector('.tecla_pom').onclick = playSoundPom; */

function playSound(idElementoAudio){
    const audio = document.querySelector(idElementoAudio);
    if(audio != null && audio.localName === "audio" ){
        audio.play();
    }else{
        console.log("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(element => {
    const instrumento = element.classList[1];
    element.onclick = function () {
        playSound(`#som_${instrumento}`);
    };
    element.onkeydown = function (event) {
        //Se utilizar o == verifica o valor, então ele vai dizer que 1 == "1" é true. por conta do valor ser o mesmo.
        //Para garantir de forma precisa temos que usar o === para comporar valores, pois ele verifica o valor e o tipo dos elementos 1 === "1" é false.
        if(event.code === "Space" || event.code === "Enter"){
            element.classList.add('ativa');
        }
    }
    element.onkeyup = function () {
        if(event.code === "Space" || event.code === "Enter"){
            element.classList.remove('ativa');
        }
    }
});

// let contador = 0;
// while(contador < listaDeTeclas.length){
//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     tecla.onclick = function () {
//         playSound(`#som_${instrumento}`);
//     };
//     contador++;
// }