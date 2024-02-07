// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addtodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "제목",
    body: "내용",
    isDone: false,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((prev) => prev.id !== action.payload); //TODO: 여기 작성

    case SWITCH_TODO:
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
