const taskInput = document.querySelector('.todo-input');
const listOfTasks = document.querySelector('.todo-list');

//functions
const addSingleTask = (event) =>{
    event.preventDefault();
    
    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('todo');
    
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('todo-item');
    tasksContainer.appendChild(newTask);

    saveLocalTodos(taskInput.value);

    const checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fas fa-calendar-check"></i><span class="extra"> EDIT</span>';
    checkedButton.classList.add("edit");

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-calendar-times"></i><span class="extra"> DELETE</span>';
    deleteButton.classList.add("delete");

    tasksContainer.appendChild(checkedButton);
    listOfTasks.appendChild(tasksContainer).appendChild(deleteButton);
    taskInput.value = "";
}

const getData = () =>{
    axios.get('https://www.boredapi.com/api/activity')
    .then(res => {
        localStorage.setItem("Objects", JSON.stringify(res.data));
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('todo');
        
        const newTask = document.createElement('li');
        newTask.innerText = JSON.parse(localStorage.getItem("Objects")).activity;
        newTask.classList.add('todo-item');
        tasksContainer.appendChild(newTask);

        const checkedButton = document.createElement('button');
        checkedButton.innerHTML = '<i class="fas fa-calendar-check"></i><span class="extra"> EDIT</span>';
        checkedButton.classList.add("edit");

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-calendar-times"></i><span class="extra"> DELETE</span>';
        deleteButton.classList.add("delete");

        tasksContainer.appendChild(checkedButton);
        listOfTasks.appendChild(tasksContainer).appendChild(deleteButton);
    })
}

getData()

const deleteAndCheckButtons = selectsTheButton =>{
    const bothButtonSelected = selectsTheButton.target;
    if (bothButtonSelected.classList[0] === "delete"){
        const taskContent = bothButtonSelected.parentElement;
        taskContent.classList.toggle("deleteItem");
        taskContent.addEventListener('transitionend', removingItem = () => taskContent.remove());
        removeTaskFromLocalSession(taskContent);
    }
    if (bothButtonSelected.classList[0] === "edit"){
        bothButtonSelected.parentElement.classList.toggle("completed");
    }
}

const saveLocalTodos = task =>{
    let taskItem;
    if(localStorage.getItem("taskItem") === null){
        taskItem = [];
    } else{
        taskItem = JSON.parse(localStorage.getItem("taskItem"));
    }

    taskItem.push(task);
    localStorage.setItem("taskItem", JSON.stringify(taskItem));
}

const getIndividualTask = () =>{
    let taskItem;
    if(localStorage.getItem("taskItem") === null){
        taskItem = [];
    } else{
        taskItem = JSON.parse(localStorage.getItem("taskItem"));
    }
    taskItem.forEach(function(todo){
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('todo');
        
        const newTask = document.createElement('li');
        newTask.innerText = todo;
        newTask.classList.add('todo-item');
        tasksContainer.appendChild(newTask);
    
        const checkedButton = document.createElement('button');
        checkedButton.innerHTML = '<i class="fas fa-calendar-check"></i><span class="extra"> EDIT</span>';
        checkedButton.classList.add("edit");
        tasksContainer.appendChild(checkedButton);
    
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-calendar-times"></i><span class="extra"> DELETE</span>';
        deleteButton.classList.add("delete");
        tasksContainer.appendChild(deleteButton);
    
        listOfTasks.appendChild(tasksContainer); 
    })
}

let removeTaskFromLocalSession = individualTaskSelected =>{
    let taskItem;
    if(localStorage.getItem("taskItem") === null){
        taskItem = [];
    } else{
        taskItem = JSON.parse(localStorage.getItem("taskItem"));
    }
    taskItem.splice(taskItem.indexOf(individualTaskSelected.children[0].innerText), 1);
    localStorage.setItem("taskItem", JSON.stringify(taskItem));
}

document.querySelector('.todo-button').addEventListener("click", addSingleTask);
document.addEventListener('DOMContentLoaded', getIndividualTask);
listOfTasks.addEventListener("click", deleteAndCheckButtons);
