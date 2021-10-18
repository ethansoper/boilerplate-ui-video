import { fromJS } from 'immutable';
import { SUCCESS_MESSAGE, FAILURE_MESSAGE } from './actionTypes';

export const initialState = fromJS({
	type: '',
	message: '',
	messageTime: ''
});

export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case SUCCESS_MESSAGE:
			return state
				.set('message', action.payload)
				.set('messageTime', new Date())
				.set('type', 'success');

		case FAILURE_MESSAGE:
			return state
				.set('message', action.payload)
				.set('messageTime', new Date())
				.set('type', 'failure');

		default:
			return state;
	}
};
