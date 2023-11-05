let addTarefa = document.getElementById("addTarefa");

addTarefa.addEventListener("click", adicionarTarefa);
function adicionarTarefa(){
    const textArea = document.getElementById('tarefas').value; 

    if(textArea === ""){
        alert("Por favor, insira uma tarefa.");
        return;
    }

    const listaDeTarefas = document.getElementById("lista-de-tarefas");
    const newTarefa = document.createElement('li');
    newTarefa.textContent = textArea;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.onclick = function() {
        listaDeTarefas.removeChild(newTarefa);
    };
    botaoRemover.style.marginLeft = '5px';

    newTarefa.appendChild(botaoRemover);
    listaDeTarefas.appendChild(newTarefa);

    input.value = '';
}