import * as UserEpics from './epic';
import * as userActions from './actions';
import * as userActiontypes from './actionTypes';
import { userReducer } from './reducer';

const userEpics = Object.values({ ...UserEpics });

export { userActions, userActiontypes, userEpics, userReducer };
