import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/modules/todos";
import { v4 as uuidv4 } from "uuid";
import Sub from "./Sub";

function Main() {
  const [name, setName] = useState("");
  const [context, setContext] = useState("");
  const dispatch = useDispatch();

  const submitBtn = (event) => {
    event.preventDefault();
    const newArr = {
      id: uuidv4(),
      title: name,
      body: context,
      isDone: false,
    };
    dispatch(addtodo(newArr));
  };

  return (
    <>
      <form onSubmit={submitBtn}>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <input
          value={context}
          onChange={(event) => setContext(event.target.value)}
        />
        <button type="submit">제출</button>
      </form>
      <Sub bool={false} />
      <Sub bool={true} />
    </>
  );
}

export default Main;
