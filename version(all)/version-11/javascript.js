
// VERSION-11 DESTROY ALL FOR LOOPS

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
this.todos.splice(position, 1);
},
toggleCompleted: function(position){
var todo = this.todos[position];
todo.completed = !todo.completed;
},
toggleAll: function(){
var totalTodos = this.todos.length;
var completedTodos = 0;

this.todos.forEach(function(todo){
if(todo.completed === true){
completedTodos++;
}
});
this.todos.forEach(function(todo){
if (completedTodos === totalTodos){
todo.completed = false;
}
else{
todo.completed = true;
}
}); 
}
};

//var displayTodosButton = document.getElementById('displayTodosButton');
//var toggleAllButton = document.getElementById('toggleAllButton');

//displayTodosButton.addEventlistener('click', function(){
// todoList.displayTodos();
//});

//toggleAllButton.addEventListener('click', function(){
// todoList.toggleAll();
//})

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
deleteTodo: function (position){
//var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
todoList.deleteTodo(position);
// deleteTodoPositionInput.value = '';
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

todoList.todos.forEach(function(todo, position){
var todoLi = document.createElement('li');
var todoTextWithCompletion = '';
if(todo.completed === true){
todoTextWithCompletion = '(x)' + todo.todoText;
}
else{
todoTextWithCompletion = '( )' + todo.todoText;
}

todoLi.id = position;
todoLi.textContent = todoTextWithCompletion;
todoLi.appendChild(this.createDeleteButton());
todosUl.appendChild(todoLi);
}, this);

},
createDeleteButton: function(){
var deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.className = 'deleteButton';
return deleteButton;
},
setUpEventListeners: function(){
var todosUl = document.querySelector('ul');
todosUl.addEventListener('click', function(event){
var elementClicked = event.target;

if (elementClicked.className === 'deleteButton'){
handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
}
});
}
};

//-------------------------------------------------------------------------------

// INTERLUDE - UNDERSTANDING *THIS*

function Person(name){
this.name = name;
}
new Person('gordon');
// Person {name: "gordon"}

function logThis(){
console.log(this);
}
logThis();
// window

logThis.apply({name: 'gordon'});
logThis.call({name: 'gordon'});
//object {name: "gordon"}
//object {name: "gordon"}

//-------------------------------------------------------------------------------

function logThisWithArguments(greeting, name){
console.log(greeting, name);
console.log(this);
}
logThisWithArguments('hi', 'gordon');
// hi gordon

logThisWithArguments.apply({name: 'gordon'}, ['hi', 'gordon']);
logThisWithArguments.call({name: 'gordon'}, 'hi', 'gordon');
//object {name: "gordon"}
//hi gordon
//object {name: "gordon"}

//-------------------------------------------------------------------------------

function outerFunction(callback){
callback();
}
function logThis(){
console.log(this);
}
//undefined
outerFunction(logThis);
// window {stop: function, open: func....}

//-------------------------------------------------------------------------------

function callAsConstructor(callback){
new callback();
}
callAsConstructor(logThis);
//logthis{}

