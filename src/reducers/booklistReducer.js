export const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case EDIT_BOOK:
      return [...action?.payload];
    case REMOVE_BOOK:
      return [...action?.payload];
    case CHANGE_READ_STATUS:
      return [...action?.payload];
    default:
      return state;
  }
};

// Action Types
export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const CHANGE_READ_STATUS = "CHANGE_READ_STATUS";
