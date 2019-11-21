
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