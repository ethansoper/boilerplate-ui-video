import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { userActions } from '../../containers/User';

const styles = (theme) => ({
	root: {
		textTransform: 'none'
	}
});

class LogOut extends Component {
	constructor() {
		super();

		this.handleLogOut = this.handleLogOut.bind(this);
	}

	async handleLogOut(event) {
		event.preventDefault();
		const { deAuthUser } = this.props;
		try {
			window.location.href = '/';
			Auth.signOut();
			deAuthUser();
		} catch (error) {
			console.log(error.message);
		}
	}

	render() {
		const { classes, t } = this.props;
		const { root } = classes;

		return (
			<Button
				className={root}
				onClick={this.handleLogOut}
				color="secondary"
				variant="outlined"
				href="/"
			>
				{t('components.layout.SideNavbar.routes.log-out')}
			</Button>
		);
	}
}

LogOut.propTypes = {
	classes: PropTypes.object,
	deAuthUser: PropTypes.func,
	t: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
	return {
		deAuthUser: () => {
			dispatch(userActions.deAuthUser());
		}
	};
};

export default connect(
	null,
	mapDispatchToProps
)(withStyles(styles)(withTranslation()(LogOut)));
