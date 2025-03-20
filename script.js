let contador = 0;
let tarefa = document.getElementById("input");
let container = document.getElementById("tarefas");
let botao = document.getElementById("confirmar")

function confirmar(){
    let valorTarefa = tarefa.value;

    //valida se foi escrita alguma tarefa
    if((valorTarefa !== "") && (valorTarefa !== null) && (valorTarefa !== undefined)){
        ++contador;
        console.log(contador);

        //adiciona novo item 
        let novoItem = `<div id = "${contador}" class = 'tarefabox'>
                            <div id = "icone${contador}" class = "icone mdi mdi-circle-outline" onclick = "fazer(${contador})">
                        
                            </div>
                            <p class = "tarefa" onclick = "fazer(${contador})">
                                ${valorTarefa}
                            </p>
                            <button onclick = "deletar(${contador})" class = 'delete'> 
                                <span class="mdi mdi-delete"></span>Deletar
                            </button>
                        </div>`; 
        container.innerHTML += novoItem;

        //zerar o campo
        tarefa.value = "";
        tarefa.focus();

    }
} 


//Deleta a tarefa
function deletar(id){
    var tarefaboxId = document.getElementById(id);
    tarefaboxId.remove();
}

//função para marcar a tarefa como feita
function fazer(id){
    let tarefaboxId = document.getElementById(id);
    let iconeId = document.getElementById("icone" + id)

    //comuta entre a tarefa feita e não feita conforme o clique na tarefa
    if(tarefaboxId.classList.contains("clicada")){// O método .contains verifica se o elemento contém a classe indicada e retorna um valor booleano

        tarefaboxId.classList.remove("clicada");
        iconeId.classList.add("mdi-circle-outline");
        iconeId.classList.remove("mdi-check-circle");

    }else{

        tarefaboxId.classList.add("clicada");
        iconeId.classList.remove("mdi-circle-outline");
        iconeId.classList.add("mdi-check-circle");

        tarefaboxId.parentNode.appendChild(tarefaboxId)
    }

}

//confirmar apertando enter
tarefa.addEventListener("keyup", event =>{ //Aplicação de uma arrow function com apenas um parâmetro

    //se teclou enter
    if(event.keyCode === 13){
        event.preventDefault();
        botao.click();
    }
})

