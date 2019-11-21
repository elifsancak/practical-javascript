
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