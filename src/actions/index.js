export const addTask = (task) => {
  return { type: "ADD_TASK", payload: task };
};

export const removeTask = (task) => {
  return { type: "REMOVE_TASK", payload: task };
};

export const editTask = (task) => {
  return { type: "EDIT_TASK", payload: task };
};
