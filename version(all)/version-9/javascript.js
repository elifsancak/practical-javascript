
// VERSION-9 ESCAPE FROM THE CONSOLE


var todoList = {
todos: [],
displayTodos: function(){
if(this.todos.length === 0){
console.log('your todo list is empty');
}
else {
console.log('My todos:');
for (var i=0; i<this.todos.legth; i++){

if(this.todos[i].completed === true){
console.log('(x)', this.todos[i].todoText);
}
else {
console.log('( )', this.todos[i].todoText); 
}
}
}
},
addTodo: function(todoText){
this.todos.push({
todoText: todoText,
completed: false
});
this.displayTodos();
},
changeTodo: function(position,todoText){
//this.todos[position] = newValue;
this.todos[position].todoText = todoText;
this.displayTodos();
},
deleteTodo: function(position){
todos.splice(position, 1);
displayTodos();
},
toggleCompleted: function(position){
var todo = this.todos[position];
todo.completed = !todo.completed;
this.displayTodos();
},
toggleAll: function(){
var totalTodos = this.todos.length;
var completedTodos = 0;

for (var i=0; i<totalTodos; i++){
if(this.todos[i].completed === true){
completedTodos++;
}
}
if (completedTodos === totalTodos){
for(var i=0; i<totalTodos; i++){
this.todos[i].completed = false;
}
}
else{
for(var i=0; i<totalTodos; i++){
this.todos[i].completed = true;
}
}
this.displayTodos();
}
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventlistener('click', function(){
todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
todoList.toggleAll();
})

var handlers = {
displayTodos: function(){
todoList.displayTodos();
},
toggleAll: function(){
todoList.toggleAll();
},
addTodo: function(){
var addTodoTextInput = document.getElementById('addTodoTextInput');
todoList.addTodo(addTodoTextInput.value);
addTodoTextInput.value = '';
view.displayTodos();
},

changeTodo: function(){
var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
var changeTodoTextInput = document.getElementById('changeTodoTextInput');
todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
changeTodoPositionInput .value = '';
changeTodoTextInput.value = ''; 
view.displayTodos(); 
},
deleteTodo: function (){
var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
deleteTodoPositionInput.value = '';
view.displayTodos();
},

toggleCompleted: function(){
var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
toggleCompletedPositionInput.value = '';
view.displayTodos();
},

toggleAll: function(){
todoList.toggleAll();
view.displayTodos();
}
};

var view = {
displayTodos: function(){
var todosUl = document.querySelector('ul');
todosUl.innerHTML = '';
for (var i=0; i<todoList.todos.length; i++){
var todoLi = document.createElement('li');
var todo = todoList.todos[i];
var todoTextWithCompletion = '';
if(todo.completed === true){
todoTextWithCompletion = '(x)' + todo.todoText;
}
else{
todoTextWithCompletion = '( )' + todo.todoText;
}

todoLi.textContent = todoTextWithCompletion;
todosUl.appendChild(todoLi);
}
}
};


var todoLi = document.createElement('li');
// undefined
todoLi;
// <li></li>
var todosUl = document.querySelector('ul');
// undefined
todosUl;
// <ul></ul>
todosUl.appendChild(todoLi);
// <li></li>

view.displayTodos();
// undefined
//(when write 'completed should show up' in the text of add button then click to add button)
// My todos: () completed should show up

view.displayTodos();
// undefined and "() completed should show up" shows on the screen
//(when write '0' in the text of toggle completed button then if click to toggle completed button)
// My todos: (x) completed should show up

//(when write 'escaped from the console' in the text of add button then if click to add button)
// My todos: () escaped from the console

//(when write '0' and 'modified' in the text of change todo button then if click to changetodo button)
// when click todo button then "() modified" shows on the screen
// (when write '0' in the text of delete button then click delete button
// text ...

//-------------------------------------------------------------------------------


var todoList = {
todos: [],
addTodo: function(todoText){
this.todos.push({
todoText: todoText,
completed: false
});
},
changeTodo: function(position,todoText){
//this.todos[position] = newValue;
this.todos[position].todoText = todoText;
},
deleteTodo: function(position){
todos.splice(position, 1);
},
toggleCompleted: function(position){
var todo = this.todos[position];
todo.completed = !todo.completed;
},
toggleAll: function(){
var totalTodos = this.todos.length;
var completedTodos = 0;

for (var i=0; i<totalTodos; i++){
if(this.todos[i].completed === true){
completedTodos++;
}
}
if (completedTodos === totalTodos){
for(var i=0; i<totalTodos; i++){
this.todos[i].completed = false;
}
}
else{
for(var i=0; i<totalTodos; i++){
this.todos[i].completed = true;
}
}
}
};

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventlistener('click', function(){
todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function(){
todoList.toggleAll();
})

var handlers = {
addTodo: function(){
var addTodoTextInput = document.getElementById('addTodoTextInput');
todoList.addTodo(addTodoTextInput.value);
addTodoTextInput.value = '';
view.displayTodos();
},

changeTodo: function(){
var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
var changeTodoTextInput = document.getElementById('changeTodoTextInput');
todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
changeTodoPositionInput .value = '';
changeTodoTextInput.value = ''; 
view.displayTodos(); 
},
deleteTodo: function (){
var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
deleteTodoPositionInput.value = '';
view.displayTodos();
},

toggleCompleted: function(){
var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
toggleCompletedPositionInput.value = '';
view.displayTodos();
},

toggleAll: function(){
todoList.toggleAll();
view.displayTodos();
}
};

var view = {
displayTodos: function(){
var todosUl = document.querySelector('ul');
todosUl.innerHTML = '';
for (var i=0; i<todoList.todos.length; i++){
var todoLi = document.createElement('li');
var todo = todoList.todos[i];
var todoTextWithCompletion = '';
if(todo.completed === true){
todoTextWithCompletion = '(x)' + todo.todoText;
}
else{
todoTextWithCompletion = '( )' + todo.todoText;
}

todoLi.textContent = todoTextWithCompletion;
todosUl.appendChild(todoLi);
}
}
};

//-------------------------------------------------------------------------------

// INTERLUDE - FUNCTIONS INSIDE OF FUNCTIONS

function logTenNumbers(){
for (var i=0; i<10; i++){
console.log(i);
}
}

debugger;
logTenNumbers();
// 0 1 2 3 4 5 6 7 8 9

function runWithDebugger(ourFunction){
debugger;
ourFunction();
}
//undefined

runWithDebugger(function logTenNumbers(){
for (var i=0; i<10; i++){
console.log(i);
}
});
// 0 1 2 3 4 5 6 7 8 9

//-------------------------------------------------------------------------------

setTimeout(function() {
console.log('wake up Gordon!');
}, 5000)
//1 (then 5 seconds) "wake up Gordon!" writes on the screen

//-------------------------------------------------------------------------------

var students = ['jonathan', 'jenny', 'elliot'];
//undefined
function logName(name){
console.log(name);
}
// undefined

logName(students[0]);
//jonathan
logName(students[1]);
//jenny
logName(students[2]);
//elliot

for (var i=0; i<students.length; i++){
logName(students[i]);
}
//jonathan jenny elliot

students.forEach(logName);
//jonathan jenny elliot

students.forEach(function logName(name){
console.log(name);
})
//jonathan jenny elliot

//-------------------------------------------------------------------------------

function forEach(myArray, myFunction){
for(var i=0; i<myArray.length; i++){
myFunction(myArray[i]);
}
}
//undefined

forEach(students, function(student){
console.log(student);
})
//jonathan jenny elliot

forEach(students, logName);
//jonathan jenny elliot