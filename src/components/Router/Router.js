import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userActions } from '../../containers/User';
import PrivateRoute from './PrivateRoute';

import AccountPage from '../../pages/Account';
import DashboardPage from '../../pages/Dashboard';
import DownloadPage from '../../pages/Download';
// import Home from '../../pages/Home';
import LoginPage from '../../pages/Login';
import UsersPage from '../../pages/Users';

class AppRouter extends Component {
	async componentDidMount() {
		const { authUserSession, isAuthed } = this.props;
		if (!isAuthed) {
			authUserSession();
		}
	}

	render() {
		const { isAuthed, isAuthingUser, t } = this.props;

		return isAuthingUser && !isAuthed ? (
			<p>{t('components.layout.Router.loading')}</p>
		) : (
			<Router>
				<Switch>
					<Route exact path="/" render={(props) => <LoginPage {...props} />} />
					{/* <Route
						exact
						path="/register"
						render={(props) => <Home {...props} />}
					/>
					<Route
						exact
						path="/login"
						render={(props) => <LoginPage {...props} />}
					/> */}
					<Route
						exact
						path="/:year/download"
						render={(props) => <DownloadPage {...props} />}
					/>
					<PrivateRoute
						exact
						path="/dashboard"
						isAuthed={isAuthed}
						Render={(props) => <DashboardPage {...props} />}
					/>
					<PrivateRoute
						exact
						path="/account"
						isAuthed={isAuthed}
						Render={(props) => <AccountPage {...props} />}
					/>
					<PrivateRoute
						exact
						path="/users"
						isAuthed={isAuthed}
						Render={(props) => <UsersPage {...props} />}
					/>
				</Switch>
			</Router>
		);
	}
}
AppRouter.propTypes = {
	authUserSession: PropTypes.func,
	isAuthed: PropTypes.bool,
	isAuthingUser: PropTypes.bool,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		isAuthed: state.userReducer.get('isAuthed'),
		isAuthingUser: state.userReducer.get('isAuthingUser')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authUserSession: () => {
			dispatch(userActions.authUserSession());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withTranslation()(AppRouter));
