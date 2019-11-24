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
