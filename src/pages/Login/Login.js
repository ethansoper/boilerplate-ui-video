import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { userActions } from '../../containers/User';
import PasswordValidationInput from '../../validation/inputs/passwordValidationInput';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
	pageContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flexBasis: '100%',
		width: '100%',
		alignItems: 'center',
		background:
			'linear-gradient(315deg, hsla(130, 52%, 81%, 1) 0%, hsla(176, 57%, 89%, 1) 100%)'
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: 'fit-content',
		padding: '32px',
		alignItems: 'center'
	},
	detailsContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column'
	},
	icon: {
		color: 'lightgray'
	},
	progress: {
		alignItems: 'center',
		display: 'flex',
		height: '160px',
		justifyContent: 'center',
		margin: '10px 0px 20px 20px'
	},
	submit: {
		textTransform: 'none',
		color: 'white',
		width: '10ch'
	},
	textField: {
		marginBottom: '10px',
		textDecoration: 'none!important'
	}
});

const checkForChallengeNames = (challengeName, history) => {
	switch (challengeName) {
		case 'NEW_PASSWORD_REQUIRED': // TODO: These should be constants & shouldn't live inside of the login page
			history.push('/change-password');
			break;
		default:
			break;
	}
};

const Login = (props) => {
	const {
		authUser,
		challengeName,
		classes,
		isAuthed,
		isAuthingUser,
		logInError,
		t
	} = props;
	const {
		container,
		detailsContainer,
		formContainer,
		pageContainer,
		progress,
		submit,
		textField
	} = classes;

	checkForChallengeNames(challengeName, props.history);

	const [hasValidationErrors, setHasValidationErrors] = useState(false);
	const [userInfo, setUserInfo] = useState({});
	const [passwordInput, setPasswordInput] = useState('');

	if (isAuthed) {
		props.history.push('/dashboard');
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		const username = event.target[0].value;
		const password = event.target[2].value;
		authUser(username, password);
	};

	const handleHasValidationErrors = (hasErrors) => {
		if (hasErrors) {
			setHasValidationErrors(true);
		} else {
			setHasValidationErrors(false);
		}
	};

	// const getStoredInfo = useCallback(() => {
	// 	// eslint-disable-next-line
	// 	const CPI = localStorage.getItem('CPI');
	// 	const { ORG, UNAME } = JSON.parse(CPI);
	// 	setUserInfo({
	// 		organization: ORG,
	// 		username: UNAME
	// 	});
	// }, [setUserInfo]);

	const handleRemoveLocalStorage = () => {
		// eslint-disable-next-line
		localStorage.clear();
	};

	useEffect(() => {
		if (!userInfo.organization) {
			// getStoredInfo();
		}
	}, [
		// getStoredInfo,
		userInfo
	]);

	return (
		<Container className={pageContainer} maxWidth={false}>
			<Paper className={container} elevation={2}>
				<h1>{userInfo.organization || t('pages.login.header')}</h1>
				{isAuthingUser ? (
					<Container className={progress}>
						<CircularProgress />
					</Container>
				) : (
					<Fragment>
						<form className={formContainer} onSubmit={handleSubmit}>
							<TextField
								size="small"
								error={logInError}
								className={textField}
								id="login-username-input"
								label={t('pages.login.input.username')}
								type="text"
								disabled
								InputLabelProps={{
									shrink: true
								}}
								variant="outlined"
								value={userInfo.username || ''}
							/>
							<PasswordValidationInput
								label={t('pages.login.input.password')}
								onChange={(value) => setPasswordInput(value)}
								value={passwordInput}
								showTooltip={false}
								onError={handleHasValidationErrors}
								t={t}
							/>
							<div className={detailsContainer}>
								<Link
									className={textField}
									href="/forgot-password"
									onClick={(e) => e.preventDefault}
								>
									{t('pages.login.forgot-password.label')}
								</Link>
								<Link
									className={textField}
									href=""
									onClick={handleRemoveLocalStorage}
								>
									Not you?
								</Link>
							</div>
							<Button
								type="submit"
								variant="contained"
								size="small"
								color="primary"
								disabled={hasValidationErrors}
								className={submit}
							>
								{t('pages.login.submit')}
							</Button>
						</form>
					</Fragment>
				)}
			</Paper>
		</Container>
	);
};

Login.propTypes = {
	authUser: PropTypes.func,
	classes: PropTypes.object,
	challengeName: PropTypes.string,
	cognitoAuthUser: PropTypes.func,
	history: PropTypes.object,
	isAuthed: PropTypes.bool,
	isAuthingUser: PropTypes.bool,
	logInError: PropTypes.bool,
	t: PropTypes.func,
	username: PropTypes.string
};

const mapStateToProps = (state) => {
	return {
		challengeName: state.userReducer.get('challengeName'),
		isAuthed: state.userReducer.get('isAuthed'),
		isAuthingUser: state.userReducer.get('isAuthingUser'),
		logInError: state.userReducer.get('logInError')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authUser: (username, password) => {
			dispatch(userActions.authUser(username, password));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Login));
