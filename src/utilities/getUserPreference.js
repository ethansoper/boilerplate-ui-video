import { defaultUserPreferences } from '../helpers/defaultUserPreferences';
import store from '../store';

export const getUserPreference = (key) => {
	// TODO: do better verbose checking here to make sure state can be accessed.
	const user = store.getState().userReducer.get('user');

	if (!user || user.size === 0) {
		return getDefaultPreferences(key);
	}

	if (user && !user.preferences) {
		return getDefaultPreferences(key);
	}

	if (!Object.entries(user.preferences).length) {
		return getDefaultPreferences(key);
	}

	const preferences = JSON.parse(user.preferences);

	if (preferences.hasOwnProperty(key)) {
		return preferences[key];
	} else if (defaultUserPreferences.hasOwnProperty(key)) {
		return getDefaultPreferences(key);
	} else {
		return false;
	}
};

const getDefaultPreferences = (key) => {
	if (defaultUserPreferences.hasOwnProperty(key)) {
		return defaultUserPreferences[key];
	} else {
		return false;
	}
};
