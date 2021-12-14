// import axios from 'axios';
import { ofType } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';
import { successMessage, failureMessage } from '../Notifications/actions';

import { getAlertsCompleted, getAlertsFailed } from './actions.js';
import { GET_ALERTS } from './actionTypes.js';

export const getAlertsEpic = (action$) =>
	action$.pipe(
		ofType(GET_ALERTS),
		mergeMap(async (action) => {
			return {
				unreadMessages: 5
			};
		}),
		switchMap((res) => [
			getAlertsCompleted(res),
			successMessage('Returned Alerts')
		]),
		catchError((error, source) =>
			merge(of(getAlertsFailed(), failureMessage(error.message)), source)
		)
	);
