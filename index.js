getLocalStorage();
loadEvents();
// load every event in the page
function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.getElementById('clear').addEventListener('click',clearList);
  document.querySelector('ul').addEventListener('click',deleteTask);
}

// subit data function
function submit(e){
  e.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  // checks if there is any data saved
  if(localStorage.getItem('tasks') == null){
    taskList = [];
  }
  else{
    taskList = JSON.parse(localStorage.getItem('tasks'));
  }
  taskList.push(input.value);
  saveLocally(taskList);
  addTask(input.value);
  input.value = '';

}
// add tasks
function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox">${task}`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}
// save in localStorage
function saveLocally(task){
  localStorage.setItem('tasks',JSON.stringify(task));
}
// get data from localStorage
function getLocalStorage(){
  let taskList;
  // checks if there is any data saved
  if(localStorage.getItem('tasks') == null){
    taskList = [];
  }
  else{
    taskList = JSON.parse(localStorage.getItem('tasks'));
  }

  if(taskList.length > 0){
    taskList.forEach(function(task){
      addTask(task);
    });
  }
}

// clear the LIST
function clearList(e){
  let ul = document.querySelector('ul').innerHTML = '';
  // clear local Storage data
  localStorage.clear();
}

// delete task
function deleteTask(e){
  if(e.target.className = 'delete'){
    let remove = e.target.parentNode;
    let text = e.target.parentNode.lastChild.textContent;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    // delete from local Storage
    removeFromLocalStorage(text);
  }

}
// remove from local Strorage
function removeFromLocalStorage(task){
  let taskList;
  // checks if there is any data saved
  if(localStorage.getItem('tasks') == null){
    taskList = [];
  }
  else{
    taskList = JSON.parse(localStorage.getItem('tasks'));
  }
  taskList.splice(taskList.indexOf(task),1);
  localStorage.setItem('tasks',JSON.stringify(taskList));
}
