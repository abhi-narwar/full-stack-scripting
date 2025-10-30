
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  
  const li = document.createElement('li');
  li.textContent = taskText;

  
  const delBtn = document.createElement('button');
  delBtn.textContent = "❌";
  delBtn.style.marginLeft = "10px";

  
  delBtn.addEventListener('click', function() {
    li.remove();
  });

  
  li.appendChild(delBtn);


  taskList.appendChild(li);


  taskInput.value = "";
}


addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
