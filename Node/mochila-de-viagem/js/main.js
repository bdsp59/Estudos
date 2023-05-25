const form = document.getElementById("novoItem");

//Como vamos usar o formulário e queremos pegar os dados que foram inseridos ao submeter o formulário, vamos adicionar o eventListener com essa ação.
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); //Usamos esse comando para impedir que o formulário faça o comportamento padrão e possa assim executar o que queremos.
    console.log(evento);
});