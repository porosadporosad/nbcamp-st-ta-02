import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo, deleteToDo } from "../redux/modules/todos";

function Sub({ bool }) {
  const arr = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const changeBtn = (id) => {
    const newArr = [...arr];
    const index = newArr.findIndex((prev) => prev.id === id);
    const change = !newArr[index].isDone;
    newArr[index].isDone = change;

    dispatch(addtodo(newArr));
  };
  const delClickBtn = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <>
      {bool ? <h2>done</h2> : <h2>todo</h2>}
      {arr
        .filter((prev) => prev.isDone === bool)
        .map((prev) => {
          return (
            <div key={prev.id}>
              <p>{prev.title}</p>
              <p>{prev.body}</p>
              <button onClick={() => changeBtn(prev.id)}>
                {bool ? "취소" : "완료"}
              </button>
              <button onClick={() => delClickBtn(prev.id)}>삭제</button>
            </div>
          );
        })}
    </>
  );
}

export default Sub;
