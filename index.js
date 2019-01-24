let input = document.querySelector('input');
let ul = document.querySelector('ul');
let form = document.querySelector('form');
let clear = document.getElementById('clear');
let tasksBoard = document.querySelector('.tasksBoard');
let counter=0;
// add task to the list
form.addEventListener('submit',()=>{
  addTask(input.value);
  input.value = '';
});
function addTask(task){
  event.preventDefault();
  let li = document.createElement('li');
  li.innerHTML = '<span class="delete">×</span><input type="checkbox">'+task;
  tasksBoard.style.display = 'block';
  ul.appendChild(li);
  let spans = document.getElementsByTagName('span');
  let check = document.querySelectorAll('input[type="checkbox"]');
  checkedTask(check);
  deleteTodo(spans);


}
// clear the LIST
clear.addEventListener('click',clearList);
function clearList(){
  ul.innerHTML = '';
  tasksBoard.style.display = 'none';
}

// remove
function deleteTodo(t){
  for(let i = 0; i < t.length; i++){
    t[i].addEventListener('click',()=>{
      t[i].parentNode.style.display = 'none';
    });
  }

}
// check a tasks
function checkedTask(check){
  for(let i = 0; i < check.length; i++){
    check[i].addEventListener('change',()=>{
      if(check[i].checked){
        check[i].parentNode.style.color = '#c2c4c3';
        check[i].parentNode.style.textDecoration = 'line-through';
      }else{
        check[i].parentNode.style.color = '#0f222d';
        check[i].parentNode.style.textDecoration = 'none';
      }

    });
  }
}
