import { createSelector } from '@reduxjs/toolkit';

export const homeState = (state) => state.home;

export const suggestedSearch = createSelector(homeState, (home) => {
	const { suggestedPokemos } = home;

	return suggestedPokemos
});

