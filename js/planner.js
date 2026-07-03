// Academic Planner

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskInput = document.getElementById("taskInput");

const taskList = document.getElementById("taskList");

const addTaskBtn = document.getElementById("addTaskBtn");

function saveTasks(){

localStorage.setItem("tasks",JSON.stringify(tasks));

}

function displayTasks(){

taskList.innerHTML="";

tasks.forEach(function(task,index){

const li=document.createElement("li");

if(task.completed){

li.classList.add("completed");

}

li.innerHTML=`

<span>${task.text}</span>

<div>

<button class="complete-btn">

✔

</button>

<button class="delete-btn">

🗑

</button>

</div>

`;

li.querySelector(".complete-btn").addEventListener("click",function(){

tasks[index].completed=!tasks[index].completed;

saveTasks();

displayTasks();

});

li.querySelector(".delete-btn").addEventListener("click",function(){

tasks.splice(index,1);

saveTasks();

displayTasks();

});

taskList.appendChild(li);

});

}

function addTask(){

const taskText=taskInput.value.trim();

if(taskText===""){

alert("Please enter a task.");

return;

}

tasks.push({

text:taskText,

completed:false

});

saveTasks();

displayTasks();

taskInput.value="";

}

addTaskBtn.addEventListener("click",addTask);

taskInput.addEventListener("keypress",function(e){

if(e.key==="Enter"){

addTask();

}

});

displayTasks();