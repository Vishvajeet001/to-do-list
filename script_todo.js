let todoList = [];

displayItems();

function addItem(){
    let taskElement = document.querySelector('#taskInput');
    let dateElement = document.querySelector('#dateInput');
    let todoTask = taskElement.value;
    let todoDate = dateElement.value;
    todoList.push({task:todoTask,dueDate:todoDate});
    taskElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.taskList');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        let {task,dueDate} = todoList[i];
        newHtml += `
        <span>${task}</span>
        <span>${dueDate}</span>
        <button class="rmbtn" onclick="todoList.splice(${i},1);displayItems();">Remove</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}