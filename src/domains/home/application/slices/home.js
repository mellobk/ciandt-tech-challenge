import { createSlice } from "@reduxjs/toolkit";
import { userInfoInit } from "../constans/formsHomeFields";



export const initialState = {

};

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
  },
});

export const { setUserInfo, setTotalStep, setSActualStep } = Home.actions;
export default Home.reducer;
