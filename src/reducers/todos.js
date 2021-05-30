const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: new Date().getTime().toString(),
            task: action.payload,
          },
        ],
      };
    }
    case "REMOVE_TODO": {
      const newdata = state.data.filter((ele) => ele.id !== action.id);

      return {
        ...state,
        data: newdata,
      };
    }
    default: {
      return state;
    }
  }
};

export default todos;
