const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

//Como vamos usar o formulário e queremos pegar os dados que foram inseridos ao submeter o formulário, vamos adicionar o eventListener com essa ação.
form.addEventListener("submit", (evento) => {
    evento.preventDefault(); //Usamos esse comando para impedir que o formulário faça o comportamento padrão e possa assim executar o que queremos.
    //Vamos buscar as informações que precisamos acessando os valores dos elementos que fazem parte do evento.
    criarItem(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
});

function criarItem(nome, quantidade){
    console.log(nome + " " + quantidade);

    //Agora que confirmamos que conseguimos acessar o nome e a quantidade que desejamos, vamos criar o novo item com essas informações
    const novoElemento = document.createElement("li");
    novoElemento.classList.add("item");

    const numeroElemento = document.createElement("strong");
    numeroElemento.innerHTML = quantidade;

    console.log(numeroElemento);

    //Como nós criamos um objeto e queremos inserir ele dentro de outro objeto, temos que usar um método para tratar esse objeto.
    novoElemento.appendChild(numeroElemento);
    novoElemento.innerHTML += nome;

    //Agora vamos adicionar o elemento que criamos a lista de elementos já existente.
    lista.appendChild(novoElemento);

    console.log(novoElemento);
}

//Para que possamos salvar informações que criamos em tempo de execução e garantir que elas não sejam perdidas quando atualizarmos a página, devemos usar o LocalStorage