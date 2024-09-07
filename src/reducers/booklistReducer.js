export const bookReducer = (state, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case EDIT_BOOK:
    case REMOVE_BOOK:
    case CHANGE_READ_STATUS:
    case CHANGE_BOOKS_ORDER:
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
export const CHANGE_BOOKS_ORDER = "CHANGE_BOOKS_ORDER";
