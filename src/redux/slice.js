import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailList: [],
};

export const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    addEmail: (state, action) => {
      state.emailList.push(action.payload);
    },
  },
});
export const { addEmail } = emailSlice.actions;
export const emailState = (state) => state.email;
export default emailSlice.reducer;
