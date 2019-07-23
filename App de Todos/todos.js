var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//array de textos
var todos = [
  //  { text: "fazer cafe", numeros: 2},  com varias propriedades seria assim
  // com array de objectos, mas como é só texto, serve simples array
    "fazer café", 
    "estudar javascript", 
    "acessar comunidade"
];

function renderTodos () {
    listElement.innerHTML = ""; //remover todo o conteudo que está na UL
    //aparecer apenas as novas inserçoes quando clico no inserir novo todo
   
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        linkElement.setAttribute("href", "#");

        var pos = todos.indexOf(todo); //diz a posicao do todo
        linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);
        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
        //console.log(todo);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value = "";
    renderTodos();
}
buttonElement.onclick=addTodo;

function deleteTodo(pos) { //remove pela posicao do array
    todos.splice(pos, 1); //remove 1 item da pos (posicao no array)
    renderTodos(); //para inserir novos itens

}
