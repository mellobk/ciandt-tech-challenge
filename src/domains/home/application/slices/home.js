import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {fetchPokemon, getPokemos} from "../../infrastructure/apis";


export const getSuggestedPokemons = createAsyncThunk(
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


export const getFetchPokemon = createAsyncThunk(
	'home/getFetchPokemon',
	async (url, { rejectWithValue }) => {
		try {
			const response = await fetchPokemon(url);
			return response;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const initialState = {
suggestedPokemos:[],
selectedPokemon:{},
loading:false,
pokemonLoading:false,

};

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
  },
	extraReducers: {
		[getSuggestedPokemons.pending]: (state) => {
			state.loading = true;
		},
		[getSuggestedPokemons.rejected]: (state) => {
			state.loading = false;
		},
		[getSuggestedPokemons.fulfilled]: (state, { payload }) => {
			state.loading = false; 
			state.suggestedPokemos = payload.results;
		},
		[getFetchPokemon.pending]: (state) => {
			state.pokemonLoading = true;
		},
		[getFetchPokemon.rejected]: (state) => {
			state.pokemonLoading = false;
		},
		[getFetchPokemon.fulfilled]: (state, { payload }) => {
			state.pokemonLoading = false; 
			state.selectedPokemon = payload;
		},
	}
});

export default Home.reducer;
