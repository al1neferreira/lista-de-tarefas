var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

function addTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("inputTask").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Escreva uma tarefa!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("meuInput").value = "";git 
}



