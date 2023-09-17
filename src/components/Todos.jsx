import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../reducers/todo/todoSlice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const notify = (msg) =>
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

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
    notify("TODO DELETED");
  }

  return (
    <div>
      <ToastContainer />
      {todos?.map((data) => {
        return (
          <div className="todos" key={data.id}>
            <span>{data.text} </span>
            <button onClick={() => deleteTodo(data.id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
