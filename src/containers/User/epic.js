import axios from 'axios';
import { Auth } from 'aws-amplify';
import { ofType } from 'redux-observable';
import { of, merge } from 'rxjs';
import { mergeMap, switchMap, catchError } from 'rxjs/operators';
import { successMessage, failureMessage } from '../Notifications/actions';

import {
	authUserCompleted,
	authUserFailed,
	authUserSessionCompleted,
	authUserSessionFailed
} from './actions.js';
import { AUTH_USER, AUTH_USER_SESSION } from './actionTypes.js';

export const authUserEpic = (action$) =>
	action$.pipe(
		ofType(AUTH_USER),
		mergeMap(async (action) => {
			const { username, password } = action.payload;
			const user = await Auth.signIn(username, password);
			const session = await Auth.currentSession();
			axios.defaults.headers.common.Authorization = session
				.getIdToken()
				.getJwtToken();

			return user;
		}),
		switchMap((res) => [
			authUserCompleted(res),
			successMessage('Successfully Logged In')
		]),
		catchError((error, source) =>
			merge(of(authUserFailed(), failureMessage(error.message)), source)
		)
	);

export const authUserSessionEpic = (action$) =>
	action$.pipe(
		ofType(AUTH_USER_SESSION),
		mergeMap(async (action) => {
			try {
				// const session = await Auth.currentSession();
				// const user = await Auth.currentAuthenticatedUser();
				// axios.defaults.headers.common.Authorization = session
				// 	.getIdToken()
				// 	.getJwtToken();

				const user = {
					username: 'esoper'
				};

				return authUserSessionCompleted(user);
			} catch (e) {
				console.log('Auth User Session Epic failure.', e);
				return authUserSessionFailed();
			}
		})
	);
