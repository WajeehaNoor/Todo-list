let inputs = document.getElementById("todo-input");
let text = document.getElementById("todo-list");
function addtodo() {
    if (inputs.value) {
        let newElement = document.createElement("ul")
        newElement.innerHTML = `${inputs.value}<i class="fa fa-trash-o"></i>`
        text.appendChild(newElement);
        inputs.value = "";
        newElement.querySelector("i").addEventListner("click", removeElem);
        function removeElem() {
            newElement.remove();
        }
    } else {
        alert("plz enter number");
    }
}





























