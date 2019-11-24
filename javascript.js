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

deleteTodo(3);   // ["changed", "item2", "item3"]   // last value deleted(new todo)

changeTodo(0, 'item1');

displayTodos();   //last result =>My todos: [ "item1", "item2", "item3" ]  // first value changed with (item1)


