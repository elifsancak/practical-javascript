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

// VERSION-4 BOOLEANS

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log("My todos:", this.todos);
    for (var i = 0; i < this.todos.length; i++) {}
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    todos.splice(position, 1);
    displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

// VERSION-5 LOOPS OF LOGIC

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("your todo list is empty");
    } else {
      console.log("My todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    todos.splice(position, 1);
    displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

//todoList.addTodo("first");          // My todos: () first

//todoList.addTodo("second");        // My todos: () first () second

//todoList.toggleCompleted(1);      // My todos: ()first (x)second

//todoList.toggleCompleted(0);      // My todos: (x)first ()second

//todoList.addTodo("fifth");       // My todos: ()first ()second ()third ()fourth ()fifth ()sixth

//todoList.toggleCompleted(5);     // My todos: ()first ()second ()third ()fourth ()fifth (x)sixth

//todoList.toggleCompleted(2);     // My todos: ()first ()second (x)third ()fourth ()fifth (x)sixth

// VERSION-6 THINKING IN CODE

var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("your todo list is empty");
    } else {
      console.log("My todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

//todoList.addTodo("first");         //My todos: () first

//todoList.addTodo("second");       //My todos: () first () second

//todoList.addTodo("third");       //My todos: () first () second () third

//todoList.toggleAll();           //My todos: (x) first (x) second (x) third

//todoList.toggleAll(); //again  //My todos: () first () second () third

//todoList.toggleCompleted(0);  // My todos: (x)first ()second () third

// VERSION-7 HTML AND THE DOM

// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");
// displayTodosButton.addEventlistener("click", function() {
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
// });

//todoList.addTodo("first");      // My todos: () first
//todoList.addTodo("second");    // My todos: () first () second

//(when click to toggle All button)   // My todos: (x) first (x) second

//////////////////////////////////////////

// INTERLUDE - DONT WONDER ABOUT THINGS THE DEBUGGER CAN TELL YOU

// var todoList = {
//   todos: [],
//   displayTodos: function() {
//     //debugger;
//     if (this.todos.length === 0) {
//       console.log("your todo list is empty");
//     } else {
//       console.log("My todos:");
//       for (var i = 0; i < this.todos.length; i++) {
//         if (this.todos[i].completed === true) {
//           console.log("(x)", this.todos[i].todoText);
//         } else {
//           console.log("( )", this.todos[i].todoText);
//         }
//       }
//     }
//   },
//   addTodo: function(todoText) {
//     //debugger;
//     this.todos.push({
//       todoText: todoText,
//       completed: false
//     });
//     this.displayTodos();
//   },
//   changeTodo: function(position, todoText) {
//     //this.todos[position] = newValue;
//     //debugger;
//     this.todos[position].todoText = todoText;
//     this.displayTodos();
//   },
//   deleteTodo: function(position) {
//     //debugger;
//     todos.splice(position, 1);
//     displayTodos();
//   },
//   toggleCompleted: function(position) {
//     // debugger;
//     var todo = this.todos[position];
//     todo.completed = !todo.completed;
//     this.displayTodos();
//   },
//   toggleAll: function() {
//     //debugger;
//     var totalTodos = this.todos.length;
//     var completedTodos = 0;

//     for (var i = 0; i < totalTodos; i++) {
//       if (this.todos[i].completed === true) {
//         completedTodos++;
//       }
//     }
//     if (completedTodos === totalTodos) {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = false;
//       }
//     } else {
//       for (var i = 0; i < totalTodos; i++) {
//         this.todos[i].completed = true;
//       }
//     }
//     this.displayTodos();
//   }
// };

//(when (debugger;) added to everyone one by one) !!!!

// todoList.displayTodos();                          // your todo list is empty

// todoList.addTodo("running the debugger");        // My todos: () running the debugger

// todoList.addTodo("adding something extra");     // My todos: () running the debugger () adding something extra

// todoList.changeTodo(0, "changed happened");    // My todos: () changed happened

// todoList.addTodo("delete this garbage");      // My todos: () delete this garbage

// todoList.deleteTodo(0);                      // your todo list is empty

// todoList.addTodo("to be toggled");          // My todos: () to be toggled

// todoList / toggleCompleted(0);             // My todos: (x) to be toggled

// todoList.addTodo("this is true");         // My todos: () this is true

// todoList.toggleCompleted(0);             // My todos: (x) this is true

// todoList.toggleAll();                   // My todos: () this is true

// VERSION-8 GETTING DATA FROM INPUTS

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },

  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },

  toggleAll: function() {
    todoList.toggleAll();
  }
};

//(when write 'a todo item' in the text of add button then if click to add button)
// My todos: () a todo item
//(when write '0' in the text of add button then if click to toggle completed button)
// My todos: (x) a todo item
//(again)(when write '0' in the text of add button then if click to toggle completed button)
// My todos: ( ) a todo item

// VERSION-9 ESCAPE FROM THE CONSOLE

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

// var displayTodosButton = document.getElementById("displayTodosButton");
// var toggleAllButton = document.getElementById("toggleAllButton");

// displayTodosButton.addEventlistener("click", function() {
//   todoList.displayTodos();
// });

// toggleAllButton.addEventListener("click", function() {
//   todoList.toggleAll();
// });

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(x)" + todo.todoText;
      } else {
        todoTextWithCompletion = "( )" + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};

// VERSION-10 CLICK TO DELETE

var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    //this.todos[position] = newValue;
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //for (var i=0; i<totalTodos; i++){
    // if(this.todos[i].completed === true){
    // completedTodos++;
    // }
    // }

    this.todos.forEach(function(todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });

    this.todos.forEach(function(todo) {
      if (completedTodos === totalTodos) {
        todo.completed = false;
      } else {
        todo.completed = true;
      }
    });
  }
};

var displayTodosButton = document.getElementById("displayTodosButton");
var toggleAllButton = document.getElementById("toggleAllButton");

displayTodosButton.addEventlistener("click", function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener("click", function() {
  todoList.toggleAll();
});

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
    view.displayTodos();
  },

  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
    view.displayTodos();
  },
  deleteTodo: function(position) {
    //var deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(position);
    // deleteTodoPositionInput.value = '';
    view.displayTodos();
  },

  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
    view.displayTodos();
  },

  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(x)" + todo.todoText;
      } else {
        todoTextWithCompletion = "( )" + todo.todoText;
      }

      todoLi.id = i;
      todoLi.textContent = todoTextWithCompletion;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "deleteButton";
    return deleteButton;
  },
  setUpEventListeners: function() {
    var todosUl = document.querySelector("ul");
    todosUl.addEventListener("click", function(event) {
      var elementClicked = event.target;

      if (elementClicked.className === "deleteButton") {
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListeners();
view.createDeleteButton();
//<button class="deleteButton">Delete</button>
var gordonElement = view.createDeleteButton();
//undefined
gordonElement;
//<button class="deleteButton">Delete</button>
