import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemon, getPokemos } from "../../infrastructure/apis";

const storageFavouitesPokemons =
  JSON.parse(localStorage.getItem("favouritesPokemon")) || [];
export const getSuggestedPokemons = createAsyncThunk(
  "home/getSuggestedPokemos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getPokemos();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFetchPokemon = createAsyncThunk(
  "home/getFetchPokemon",
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetchPokemon(url);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const initialState = {
  suggestedPokemos: [],
  selectedPokemon: {},
  favouritePokemon: storageFavouitesPokemons,
  loading: false,
  pokemonLoading: false,
};

const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
    setFavouritePokemon(state, { payload }) {
      const favouritesPokemon = JSON.parse(
        JSON.stringify(state.favouritePokemon)
      );
      const findPokemon = favouritesPokemon.find(
        (data) => data.name === payload.name
      );
      if (!findPokemon) {
        state.favouritePokemon = [...favouritesPokemon, payload];
        window.localStorage.setItem(
          "favouritesPokemon",
          JSON.stringify(state.favouritePokemon)
        );
      } else {
        const filterPokemon = favouritesPokemon.filter(
          (data) => data.name !== payload.name
        );
        state.favouritePokemon = [...filterPokemon];
        window.localStorage.setItem(
          "favouritesPokemon",
          JSON.stringify(filterPokemon)
        );
      }
    },

	setSelectdPokemon(state, { payload }) {
		state.selectedPokemon = payload;
	  },
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
  },
});

export const { setFavouritePokemon, setSelectdPokemon } = Home.actions;
export default Home.reducer;
