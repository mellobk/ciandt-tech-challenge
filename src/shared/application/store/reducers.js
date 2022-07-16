import { combineReducers } from 'redux';

import home, { initialState as homeInitial } from '../../../domains/home/application/slices/home';
import adminLayout, { initialState as adminLayoutInitial } from '../slices/adminLayout';


export const initialStates = {
	home: homeInitial,
	adminLayout: adminLayoutInitial,

};

export default combineReducers({
	home,
	adminLayout,

});
