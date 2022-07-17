import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getPokemos} from "../../infrastructure/apis";


export const getSuggestedPokemos = createAsyncThunk(
	'home/getSuggestedPokemos',
	async (_, { rejectWithValue }) => {
		try {
			const response = await getPokemos();
			return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const initialState = {
suggestedPokemos:[],
loading:false,

};

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
  },
	extraReducers: {
		[getSuggestedPokemos.pending]: (state) => {
			state.loading = true;
		},
		[getSuggestedPokemos.rejected]: (state) => {
			state.loading = false;
		},
		[getSuggestedPokemos.fulfilled]: (state, { payload }) => {
			state.loading = false; 
			state.suggestedPokemos = payload.results;
		},
	}
});

export default Home.reducer;
