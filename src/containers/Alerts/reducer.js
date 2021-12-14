import { fromJS } from 'immutable';
import {
	GET_ALERTS,
	GET_ALERTS_COMPLETED,
	GET_ALERTS_FAILED
} from './actionTypes';

export const initialState = fromJS({
	alerts: {},
	isLoading: false,
	hasBeenLoaded: false,
	error: null
});

export const alertsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_ALERTS:
			return state.set('isLoading', true);

		case GET_ALERTS_COMPLETED:
			return state
				.set('isLoading', false)
				.set('hasBeenLoaded', true)
				.set('alerts', action.payload)
				.set('error', null);

		case GET_ALERTS_FAILED:
			return state
				.set('isLoading', false)
				.set('hasBeenLoaded', false)
				.set('error', action.payload);

		default:
			return state;
	}
};
