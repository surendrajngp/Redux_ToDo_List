const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
export const addToDo = (data) => ({
  type: ADD_TODO,
  payload: data,
});

export const removeToDo = (idx) => ({
  type: REMOVE_TODO,
  id: idx,
});
