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