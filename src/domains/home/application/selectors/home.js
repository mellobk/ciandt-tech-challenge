import { createSelector } from "@reduxjs/toolkit";


export const homeState = (state) => state.home;

export const suggestedSearch = createSelector(homeState, (home) => {
  const { suggestedPokemos } = home;

  return suggestedPokemos;
});

export const pokemonFetchLoading = createSelector(homeState, (home) => {
  const { pokemonLoading } = home;

  return pokemonLoading;
});

export const fecthedPokemon = createSelector(homeState, (home) => {
  const { selectedPokemon } = home;

  return selectedPokemon;
});


export const favouritesPokemons = createSelector(homeState, (home) => {
	const { favouritePokemon } = home;
    return favouritePokemon;

  });
