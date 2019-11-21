
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
