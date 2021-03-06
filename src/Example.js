import React, { useState } from "react";
import Item from "./Item";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  // useEffect(() => {
  //   if (localStorage.items) {
  //     setTodos(JSON.parse(localStorage.getItem("items")));
  //   } else {
  //     setTodos([]);
  //   }
  // }, []);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    let todoObject = {
      id: todos.length + 1,
      task: todo,
      completed: false,
    };
    // localStorage.setItem("items", JSON.stringify([...todos, todoObject]));
    setTodos([...todos, todoObject]);
    setTodo("");
  };

  const completedTodo = (index) => {
    const newList = todos.map((list) => {
      if (list.id === index) {
        list.completed = !list.completed;
      }

      return list;
    });
    // localStorage.setItem("items", JSON.stringify(newList));
    setTodos(newList);
  };

  const handleDelete = (id) => {
    const todoLeft = todos.filter((el) => el.id !== id);

    setTodos(todoLeft);
  };

  return (
    <div className="container">
      {" "}
      <div className="body">
        {" "}
        <h1>Todo App</h1>
        <div className="todo-form">
          {" "}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={todo}
              name="todo"
              onChange={handleChange}
              placeholder="Add item here..."
              style={{ padding: "10px" }}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {todos.length > 0 ? (
            <div className="todo-box">
              <h3>Todo list</h3>
              {todos.map((todoItem) => {
                return (
                  <Item
                    todoItem={todoItem}
                    completedTodo={completedTodo}
                    setTodos={setTodos}
                    todos={todos}
                    key={todoItem.id}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </div>
          ) : (
            <div>You have no todos</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
