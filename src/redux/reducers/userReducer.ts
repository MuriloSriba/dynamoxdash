import {
  loadUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../actions/userActions";

const initialState = {
  users: [],
};


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return { ...state, users: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "UPDATE_USER":
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user,
      );
      return { ...state, users: updatedUsers };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
