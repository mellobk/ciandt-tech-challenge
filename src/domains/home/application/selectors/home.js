import { createSelector } from '@reduxjs/toolkit';

export const homeState = (state) => state.home;

export const getTotalStep = createSelector(homeState, (home) => {
	const { totalStep } = home;
	return totalStep.length;
});

export const getAllStep= createSelector(homeState, (home) => {
	const { totalStep } = home;
	return totalStep;
});

export const getUserInfo= createSelector(homeState, (home) => {
	const { userInfo } = home;
	return userInfo;
});

export const getActualRotue= createSelector(homeState, (home) => {
	const { totalStep, actualStep } = home;

	
	const routePath = totalStep?.map((_,index,originalArray) =>{

	        return {lastRoute:originalArray[index-1]?.path,
			        nextRoute:originalArray[index+1]?.path}

	})
	return routePath[actualStep-1];
});
