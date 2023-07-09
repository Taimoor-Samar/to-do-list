const inputBox = document.getElementById('inputBox');
const addButton = document.getElementById('addButton');

const todoList  = document.getElementById('todoList');





//console.log(inputBox ,addButton ,todoList,addTodo);

let editTodo = null;

// Function to add to do 
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("write something");
        return false;
    }

    if(addButton.value === 'Edit'){
      editTodo.target.previousElementSibling.innerHTML= inputText;
      addButton.value = "Add";
      inputBox.value = "";
    }

else{
    //creating p tag
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerHTML = inputText;
    li.appendChild(p);

  
//creating edit button
const editButton = document.createElement('button');
editButton.innerText = 'Edit';
editButton.classList.add('button','editButton');
li.appendChild(editButton); 



  //creating deletbutton
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'remove';
  deleteButton.classList.add('button','deleteButton');
  li.appendChild(deleteButton);
  
    todoList.appendChild(li);
    inputBox.value = "";
    saveLocalTodos(inputText);

}

}


//Function to update: (Edit/Delete) to do
const updateTodo = (e) => {
   
   if(e.target.innerHTML === 'remove'){
    //console.log(e.target.innerHTML)
    todoList.removeChild (e.target.parentElement);
    deleteLocalTodos(e.target.parentElement);
   }
    if(e.target.innerHTML === 'Edit'){
        //console.log(e.target.innerHTML)
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addButton.value = "Edit";
        editTodo = e;
    
   }
}

//Function to save local to do
const saveLocalTodos = (todo) => {
let todos = [];


if (localStorage.getItem("todos")=== null) {
  todos = [];
}
else{

  todos = json.parse(localStorage.getItem("todos"));

}

todos = JSON.parse(localStorage.getItem("todos "));
 todos.push(todo);
 localStorage.setItem("todos ",JSON.stringify(todos));
 //console.log(JSON.parse(localStorage.getItem("todos ")));
//console.log(localStorage.getItem("todos "));
 //console.log(todos);

}

//Function to get local to do
const getLocalTodos = () => {
 
//console.log(localStorage.getItem("todos "));
//console.log(JSON.parse(localStorage.getItem("todos ")));

let todos;
if (localStorage.getItem("todos")=== null) {
  todos = [];
}
else{

  todos = json.parse(localStorage.getItem("todos"));
 todos.forEach(todo => {
  

 //creating p tag
 const li = document.createElement('li');
 const p = document.createElement('p');
 p.innerHTML = todo;
 li.appendChild(p);


//creating edit button
const editButton = document.createElement('button');
editButton.innerText = 'Edit';
editButton.classList.add('button','editButton');
li.appendChild(editButton); 

 //creating deletbutton
 const deleteButton = document.createElement('button');
 deleteButton.innerText = 'remove';
 deleteButton.classList.add('button','deleteButton');
 li.appendChild(deleteButton);
 
   todoList.appendChild(li)

 });
}
}

//Function to delete local todo
const deleteLocalTodos = () => {
  
    let todos;
    //console.log(localStorage.getItem("todos "));
    //console.log(JSON.parse(localStorage.getItem("todos ")));
    if (localStorage.getItem("todos")=== null) {
      todos = [];
    }
    else{
    
      todos = json.parse(localStorage.getItem("todos"));
    
    }

    //let todoText = todo;
    //console.log(todoText.children);
}


document.addEventListener('DOMContentLoaded',getLocalTodos);
addButton.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);
console.log(inputBox ,addButton ,todoList,addTodo, addButton,'editButton' );