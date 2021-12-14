import * as AlertsEpics from './epic';
import * as alertsActions from './actions';
import * as alertsActiontypes from './actionTypes';
import { alertsReducer } from './reducer';

const alertsEpics = Object.values({ ...AlertsEpics });

export { alertsActions, alertsActiontypes, alertsEpics, alertsReducer };
