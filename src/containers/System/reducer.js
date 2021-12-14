import { fromJS } from 'immutable';
import {
	OPEN_LEFT_DRAWER,
	OPEN_RIGHT_DRAWER,
	CLOSE_LEFT_DRAWER,
	CLOSE_RIGHT_DRAWER
} from './actionTypes';

export const initialState = fromJS({
	leftDrawerIsOpen: false,
	rightDrawerIsOpen: true
});

export const systemReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_LEFT_DRAWER:
			return state.set('leftDrawerIsOpen', true);

		case OPEN_RIGHT_DRAWER:
			return state.set('rightDrawerIsOpen', true);

		case CLOSE_LEFT_DRAWER:
			return state.set('leftDrawerIsOpen', false);

		case CLOSE_RIGHT_DRAWER:
			return state.set('rightDrawerIsOpen', false);

		default:
			return state;
	}
};
