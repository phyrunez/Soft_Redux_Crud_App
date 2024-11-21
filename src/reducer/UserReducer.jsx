import { createSlice } from "@reduxjs/toolkit";
import { userListData } from "../data";

console.log("user-lst", userListData);

const userSlice = createSlice({
  name: "users",
  initialState: userListData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatedUser = state.find((user) => user.id == id);
      if (updatedUser) {
        updatedUser.name = name;
        updatedUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedUser = state.find((user) => user.id == id);
      if (updatedUser) return state.filter((user) => user.id !== id);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
