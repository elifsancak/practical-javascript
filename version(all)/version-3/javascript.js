
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