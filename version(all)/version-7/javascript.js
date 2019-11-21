
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

    