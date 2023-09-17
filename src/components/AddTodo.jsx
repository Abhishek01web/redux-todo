import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../reducers/todo/todoSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const notify = (mag) =>
    toast.warn(mag, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const notifys = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input === "") {
      notify("Where's TODO 😕?");
    } else {
      dispatch(addTodo(input));
      setInput("");
      notifys("TODO ADD 😁!");
    }
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={() => {}}>
        <input
          type="text"
          placeholder="Enter your todos..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodoHandler}>Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
