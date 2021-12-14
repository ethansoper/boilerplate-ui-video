import {
	CLOSE_LEFT_DRAWER,
	CLOSE_RIGHT_DRAWER,
	OPEN_LEFT_DRAWER,
	OPEN_RIGHT_DRAWER
} from './actionTypes';

export const openLeftDrawer = (payload) => ({
	type: OPEN_LEFT_DRAWER,
	payload
});
export const closeLeftDrawer = (payload) => ({
	type: CLOSE_LEFT_DRAWER,
	payload
});

export const openRightDrawer = (payload) => ({
	type: OPEN_RIGHT_DRAWER,
	payload
});
export const closeRightDrawer = (payload) => ({
	type: CLOSE_RIGHT_DRAWER,
	payload
});
