import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { catchError } from 'rxjs/operators';
import { notificationReducer } from '../containers/Notifications';
import { userEpics, userReducer } from '../containers/User';

const epics = combineEpics(...userEpics);

const rootReducer = combineReducers({
	notificationReducer,
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
