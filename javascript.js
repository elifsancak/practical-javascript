//VERSION-1 ARRAYS

var todos = ["item1", "item2", "item3"];
//undefined

var todos = ["item1", "item2", "item3"];
todos;
//Array(3) ["item1", "item2", "item3"]

//-------------------------------------------------------------------------------

console.log('hello there', 'gordon');
//undefined

var todos = ["item1", "item2", "item3"];
console.log(todos);
//["item1", "item2", "item3"]

var todos = ["item1", "item2", "item3"];
console.log('todos');
//todos

//-------------------------------------------------------------------------------

var todos = ["item1", "item2", "item3"];
console.log('My todos:', todos);
//My todos: ["item1", "item2", "item3"]

var todos = ["item1", "item2", "item3"];
todos.push("item4");
//4
todos;
//Array(4) [ "item1", "item2", "item3", "item4" ]

todos.push("item5");
//5
todos;
//Array(5) [ "item1", "item2", "item3", "item4", "item5" ]

var todos = [ "item1", "item2", "item3", "item4", "item5" ];
todos[0];
//"item1"
todos[1];
//"item2"
todos[2];
//"item3"
todos[4];
//"item5"
todos[5];
//undefined

//-------------------------------------------------------------------------------

var todos = [ "item1", "item2", "item3", "item4", "item5" ];
todos[0] = 'item 1 updated';
// "item 1 updated"

todos;
//[ "item 1 updated", "item2", "item3", "item4", "item5" ]

//-------------------------------------------------------------------------------

var todos = [ "item 1 updated", "item2", "item3", "item4", "item5" ];
todos.splice(0, 1);
//[ "item 1 updated" ]
todos;
//[ "item2", "item3", "item4", "item5" ]
todos.splice(3, 1);
//[ "item 5" ]
todos;
//[ "item2", "item3", "item4" ]
todos.splice(3, 1);
//[]



//VERSION-2 FUNCTIONS

function sayHiTo(person){
    console.log('hi', person);
    }
    //undefined

    sayHiTo('gordon');
    // hi gordon
    // person = 'gordon'

    //-------------------------------------------------------------------------------

    var todos = ['item1', 'item2', 'item3'];
    //undefined

    function displayTodos (){
    console.log('My todos:', todos);
    }
    displayTodos();
    //My todos: ["item1", "item2", "item3"]
    
    function addTodo(){
    todos.push('new todo');
    }
    addTodo();
    //undefined

    todos;
    // ["item1", "item2", "item3", "new todo"]

    displayTodos();
    //My todos: ["item1", "item2", "item3", "new todo"]
    
    //-------------------------------------------------------------------------------

    function addTodo (){
    todos.push('new todo');
    displayTodos();
    }
    addTodo();
    // ["item1", "item2", "item3", "new todo", "new todo"]
    
    function addTodo (todo){
    todos.push(todo);
    displayTodos();
    }
    addTodo('hello there');
    //My todos: ["item1", "item2", "item3", "new todo", "new todo", "hello there"]

    //-------------------------------------------------------------------------------

    function changeTodo (position, newValue){
    todos[position] = newValue;
    }
    displayTodos();
    //My todos: ["item1", "item2", "item3", "new todo", "new todo", "hello there"]

    changeTodo(0, 'changed');
    //undefined
    displayTodos();
    //My todos: ["changed", "item2", "item3", "new todo", "new todo", "hello there"]

    function changeTodo (position, newValue){
    todos[position] = newValue;
    displayTodos();
    }
    changeTodo(0, 'changed again');
    //My todos: ["change again", "item2", "item3", "new todo", "new todo", "hello there"]
    
    //-------------------------------------------------------------------------------

    function deleteTodo (){
    todos.splice(position, 1);
    displayTodos();
    }
    displayTodos();
    //My todos: ["item2", "item3", "new todo", "new todo", "hello there"]
    deleteTodo(0);
    //My todos: [item3", "new todo", "new todo", "hello there"]
    deleteTodo(2);
    //My todos: [item3", "new todo", "hello there"]
    
    //-------------------------------------------------------------------------------
    
    // FUNCTIONS AND VARIABLES
    var myName = 'Gordon';
    
    function sayName (){
    console.log(myName);
    }
    sayName();
    // 'Gordon'
    
    var myName = 'Gordon';
    
    function sayName (){
    var secret = 'watchandcode';
    console.log(myName);
    }
    console.log(secret);
    // Error




// VERSION-3 OBJECTS

var myComputer = {
    operatingSystem: 'mac',
    screenSize: '15 inches',
    purschaseYear: 2011
    };
    myComputer;
    //Object { operatingSystem: "mac", screenSize: "15 inches", purschaseYear: 2011 }
    muComputer.operatingSystem;
    // "mac"
    myComputer.screenSize;
    // "15 inches"
    myComputer.purschaseYear;
    // 2011
    
    //-------------------------------------------------------------------------------
     ​
    var gordon = {
    name:'Gordon',
    sayName: function(){
    console.log(this);
    }
    }
    gordon.sayName();
    //Object { name: "Gordon", sayName: sayName() }

    var gordon = {
    name: 'Gordon',
    sayName: function(){
    console.log(this.name);
    }
    }
    gordon.sayName;
    
    //-------------------------------------------------------------------------------
    
    var todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function(){
    console.log("My todos:", this.todos);
    }
    };
    todoList.displayTodos();
    //My todos: [ "item1", "item2", "item3" ]
    
    //-------------------------------------------------------------------------------
    
    var todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function(){
    console.log("My todos:", this.todos);
    },
    addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
    }
    };
    todoList.addTodo('plunker');
    //My todos: [ "item1", "item2", "item3", "plunker" ]
    
    //-------------------------------------------------------------------------------

    var todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function(){
    console.log("My todos:", this.todos);
    },
    addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
    },
    changeTodo: function(position,newValue){
    this.todos[position] = newValue;
    this.displayTodos();
    }
    };
    todoList.changeTodo(0, 'first');
    // My todos: [ "first", "item2", "item3" ]
    
    //-------------------------------------------------------------------------------
    
    var todoList = {
    todos: ["item1", "item2", "item3"],
    displayTodos: function(){
    console.log("My todos:", this.todos);
    },
    addTodo: function(todo){
    this.todos.push(todo);
    this.displayTodos();
    },
    changeTodo: function(position,newValue){
    this.todos[position] = newValue;
    this.displayTodos();
    },
    deleteTodo: function(position){
    todos.splice(position, 1);
    displayTodos();
    }
    };
    todoList.displayTodos();
    // My todos: [ "item1", "item2", "item3" ]
    todoList.deleteTodo(1);
    // My todos: [ "item1", "item3" ]





// VERSION-4 BOOLEANS

var todoList = {
todos: [],
displayTodos: function(){
console.log("My todos:", this.todos);
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
}
};


todoList.addTodo('this is an object');
todoList.changeTodo(0, 'second try');
todoList.toggleCompleted(0);
// My todos: [ {…} ]




// VERSION-5 LOOPS OF LOGIC

// i = 0;
//Say 'hey' if i<3
//Increase i by 1

for (var i=0; i<3; i++){
    console.log("hey");
    }
    // undefined 
    //hey(3)

    for (var i=0; i<10; i=i+2){
    console.log("hey");
    }
    //hey(5)[0,2,4,6,8]
    
    for (var i=0; i<3; i++){
    console.log(i);
    }
    //0
    //1
    //2
    
    //-------------------------------------------------------------------------------

    var testArray = ['item1', 'item2', 'item3'];
    //undefined
    testArray[0];
    //"item1"
    testArray[1];
    //"item2"
    testArray[2];
    //"item3"
    
    for (var i=0; i<3; i++){
    console.log(testArray[i]);
    }
    // item1 item2 item3
    
    for (var i=0; i<testArray.length; i++){
    console.log(testArray[i]);
    }
    // item1 item2 item3
    testArray.push("extra item");
    // 4

    for (var i=0; i<testArray.length; i++){
    console.log(testArray[i]);
    }
    // item1 item2 item3 extra item
    
    //-------------------------------------------------------------------------------

    var todoList = {
    todos: [],
    displayTodos: function(){
    console.log("My todos:", this.todos);
    for (var i=0; i<this.todos.legth; i++){
    console.log(this.todos[i].todoText);
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
    }
    };


    todoList.displayTodos();
    // My todos: []
    todoList.addTodo('first');
    //My todos: Array [ {…} ]
    todoList.addTodo('second');
    //My todos: Array [ {…}, {…} ]

    //-------------------------------------------------------------------------------

    var todoList = {
    todos: [],
    displayTodos: function(){
    if(this.todos.length === 0){
    console.log('your todo list is empty');
    }
    else {
    console.log('My todos:');
    for (var i=0; i<this.todos.legth; i++){
    console.log(this.todos[i].todoText);
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
    }
    };



    todoList.displayTodos();
    // your todo list is empty
    todoList.addTodo('an item');
    // My todos: an item
    todoList.deleteTodo(0);
    // undefined
    
    //-------------------------------------------------------------------------------

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
    }
    };



    
    todoList.addTodo('first');
    //My todos: () first
    todoList.addTodo('second');
    //My todos: () first () second
    todoList.toggleCompleted(1);
    // My todos: ()first (x)second
    todoList.toggleCompleted(0);
    // My todos: (x)first ()second
    todoList.addTodo('fifth');
    // My todos: ()first ()second ()third ()fourth ()fifth ()sixth
    todoList.toggleCompleted(5);
    // My todos: ()first ()second ()third ()fourth ()fifth (x)sixth
    todoList.toggleCompleted(2);
    // My todos: ()first ()second (x)third ()fourth ()fifth (x)sixth





// VERSION-6 THINKING IN CODE

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
    this.displayTodos();
    }
    };
    

    
    todoList.addTodo('first');
    //My todos: () first
    todoList.addTodo('second');
    //My todos: () first () second
    todoList.toggleCompleted(0);
    // My todos: (x)first ()second
    todoList.toggleCompleted(1);
    // My todos: (x)first (x)second
    todoList.toggleAll();
    //undefined
    todoList.displayTodos();
    //My todos: () first () second
    
    //-------------------------------------------------------------------------------

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
    
    todoList.addTodo('first');
    //My todos: () first
    todoList.addTodo('second');
    //My todos: () first () second
    todoList.addTodo('third');
    //My todos: () first () second () third
    todoList.toggleAll();
    //My todos: (x) first (x) second (x) third
    todoList.toggleAll(); //again
    //My todos: () first () second () third
    todoList.toggleCompleted(0);
    // My todos: (x)first ()second () third
    
    //-------------------------------------------------------------------------------
    
    //DATA TYPES AND COMPARISONS
    
    'gordon' === 'gordon';
    //true
    'gordon1' === 'gordon';
    //false
    1 === 1;
    //true
    1 === 2;
    //false
    true === true;
    //true
    true === false;
    //false
    false === false;
    //true
    undefined === undefined
    //true
    null === null;
    //true
    
    //{} === {};
    //false
    [1, 2, 3] === [1, 2, 3];
    //false
    var houseA = {};
    //undefined
    houseA === houseA;
    //true
    
    //-------------------------------------------------------------------------------
    
    // CODE EXAMPLE-1
    
    var myPrimitive = 10;
    var myObject = {name: 'gordon'};
    
    // CODE EXAMPLE-2
    
    var myHouse = {color: 'blue'};
    myHouse.color = 'red';
    
    // CODE EXAMPLE-3
    
    var myHouse = {color: 'blue'};
    var color = myHouse.color;
    color = 'red';
    
    // CODE EXAMPLE-4
    
    var myHouse1 = {color: 'blue'};
    var myHouse2 = myHouse1;
    myHouse2.color = 'red';
    
    //myHouse1.color ? red
    //myHouse2.color ? red
    
    // CODE EXAMPLE-5
    
    var myHouse1 = {color: 'blue'};
    var myHouse2 = {color: 'blue'};
    myHouse2.color = 'red';
    
    //myHouse1.color ? blue
    //myHouse2.color ? red




// VERSION-7 HTML AND THE DOM

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
    console.log(displayTodosButton);
    displayTodosButton.addEventlistener('click', function(){
    todoList.displayTodos();
    todoList/addTodo('First item');
    });



    //(when click to display todos button)
    // My todos: () First item 
    
   //------------------------------------------------------------------------------- 

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
    

    
    todoList.addTodo('first');
    //My todos: () first
    todoList.addTodo('second');
    //My todos: () first () second
    
    //(when click to toggle All button)
    //My todos: (x) first (x) second
    
    //-------------------------------------------------------------------------------
    
    // INTERLUDE - DONT WONDER ABOUT THINGS THE DEBUGGER CAN TELL YOU
    
    var todoList = {
    todos: [],
    displayTodos: function(){
    //debugger;
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
    //debugger;
    this.todos.push({
    todoText: todoText,
    completed: false
    });
    this.displayTodos();
    },
    changeTodo: function(position,todoText){
    //this.todos[position] = newValue;
    //debugger;
    this.todos[position].todoText = todoText;
    this.displayTodos();
    },
    deleteTodo: function(position){
    //debugger;
    todos.splice(position, 1);
    displayTodos();
    },
    toggleCompleted: function(position){
    // debugger;
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
    },
    toggleAll: function(){
    //debugger;
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
    
    //(when (debugger;) added to everyone one by one)
    
    todoList.displayTodos();
    // your todo list is empty
    todoList.addTodo('running the debugger');
    // My todos: () running the debugger
    todoList.addTodo('adding something extra');
    // My todos: () running the debugger () adding something extra
    todoList.changeTodo(0, 'changed happened');
    // My todos: () changed happened
    todoList.addTodo('delete this garbage');
    // My todos: () delete this garbage
    todoList.deleteTodo(0);
    // your todo list is empty
    todoList.addTodo('to be toggled');
    // My todos: () to be toggled
    todoList/toggleCompleted(0);
    // My todos: (x) to be toggled
    todoList.addTodo('this is true');
    // My todos: () this is true
    todoList.toggleCompleted(0);
    // My todos: (x) this is true
    todoList.toggleAll();
    // My todos: () this is true

    


// VERSION-8 GETTING DATA FROM INPUTS

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
    }
    };
    
    // (when click all on the button)
    // your to do is empty
    
    //-------------------------------------------------------------------------------
    
    
  
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
    }
    };
    

    // (when write 'new value' in the text then if click the button one by one)
    // My todos: () new value, () new value...
    // (if extra added as 'something' in the text)
    // My todos: () new value () something, ...
    
    //-------------------------------------------------------------------------------
    
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
    },
    
    changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput .value = '';
    changeTodoTextInput.value = ''; 
    } 
    };
    


    //(when write 'original' in the text of add button then if click to add button)
    // My todos: () original
    
    //(when write '0' and 'modified' in the text of change todo button then if click to changetodo button)
    // My todos: () modified
    
   //------------------------------------------------------------------------------- 
    
    
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
    },
    
    changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput .value = '';
    changeTodoTextInput.value = ''; 
    },
    deleteTodo: function (){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    } 
    };
    



    //(when write 'first' in the text of add button then if click to add button)
    // My todos: () first
    //(when write 'second' in the text of add button then if click to add button)
    // My todos: () first () second
    //(when write '1' in the text of delete button then if click to delete button)
    // My todos: () first
    //(when write '0' in the text of delete button then if click to delete button)
    // your todo list is empty
    
//-------------------------------------------------------------------------------
    
    
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
    },
    
    changeTodo: function(){
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput .value = '';
    changeTodoTextInput.value = ''; 
    },
    deleteTodo: function (){
    var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
    },
    
    toggleCompleted: function(){
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    },
    
    toggleAll: function(){
    todoList.toggleAll();
    }
    };
    


    
    //(when write 'a todo item' in the text of add button then if click to add button)
    // My todos: () a todo item
    //(when write '0' in the text of add button then if click to toggle completed button)
    // My todos: (x) a todo item
    //(again)(when write '0' in the text of add button then if click to toggle completed button)
    // My todos: ( ) a todo item
