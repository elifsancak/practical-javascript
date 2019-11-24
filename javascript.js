//VERSION-1 ARRAYS

var todos = ["item1", "item2", "item3"];
console.log(todos);
//["item1", "item2", "item3"]

var todos = ["item1", "item2", "item3"];
console.log("My todos:", todos);
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

var todos = ["item1", "item2", "item3", "item4", "item5"];
todos[0] = "item 1 updated";
// "item 1 updated"
todos;
//[ "item 1 updated", "item2", "item3", "item4", "item5" ]

var todos = ["item 1 updated", "item2", "item3", "item4", "item5"];
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

console.log(todos);
//last result:  Array(3) [ "item2", "item3", "item4" ]

// VERSION-2

var todos = ["item1", "item2", "item3"];

function displayTodos() {
  console.log("My todos:", todos);
}
displayTodos();
//My todos: ["item1", "item2", "item3"]

function addTodo(todo) {
  todos.push(todo);
  displayTodos();
}

addTodo("new todo");

//My todos: [ "item1", "item2", "item3", "new todo" ]   // new value added in object (new todo)list

console.log(todos);
// [ "item1", "item2", "item3", "new todo" ]

function changeTodo(position, newValue) {
  todos[position] = newValue;
}
displayTodos();
//My todos: ["item1", "item2", "item3", "new todo"]

changeTodo(0, "changed");
//undefined

displayTodos();
//My todos: ["changed", "item2", "item3", "new todo"]  // object[0] changed with other value (item1)

function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}

deleteTodo(3); // ["changed", "item2", "item3"]   // last value deleted(new todo)

changeTodo(0, "item1");

displayTodos(); //last result =>My todos: [ "item1", "item2", "item3" ]  // first value changed with (item1)


// VERSION-3 OBJECTS

var todoList = {
  todos: ["item1", "item2", "item3"],
  displayTodos: function() {
    console.log("My todos:", this.todos);
  }
};
todoList.displayTodos();
//My todos: [ "item1", "item2", "item3" ]

var todoList = {
  todos: ["item1", "item2", "item3"],
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    todos.splice(position, 1);
    displayTodos();
  }
};


