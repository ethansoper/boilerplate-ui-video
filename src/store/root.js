import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { alertsEpics, alertsReducer } from '../containers/Alerts';
import { notificationReducer } from '../containers/Notifications';
import { systemReducer } from '../containers/System';
import { userEpics, userReducer } from '../containers/User';

const epics = combineEpics(...alertsEpics, ...userEpics);

const rootReducer = combineReducers({
	alertsReducer,
	notificationReducer,
	systemReducer,
	userReducer
});

const rootEpic = (action$, store$, dependencies) =>
	epics(action$, store$, dependencies).pipe(
		catchError((error, source) => {
			console.error('Root Epic Error Catcher', error);
			return source;
		})
	);

export { rootEpic, rootReducer };
