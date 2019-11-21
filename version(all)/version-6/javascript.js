
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