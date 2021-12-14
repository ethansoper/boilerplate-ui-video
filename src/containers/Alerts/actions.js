import {
	GET_ALERTS,
	GET_ALERTS_COMPLETED,
	GET_ALERTS_FAILED
} from './actionTypes';

export const getAlerts = (payload) => ({
	type: GET_ALERTS,
	payload
});
export const getAlertsCompleted = (payload) => ({
	type: GET_ALERTS_COMPLETED,
	payload
});

export const getAlertsFailed = (payload) => ({
	type: GET_ALERTS_FAILED,
	payload
});
