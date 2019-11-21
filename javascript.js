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
