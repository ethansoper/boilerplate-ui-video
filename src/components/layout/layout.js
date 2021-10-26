import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';
import { withStyles } from '@mui/styles';

import Theme from '../Theme';
import SideNavbar from './SideNavbar';
import Footer from './Footer';
import NotificationCenter from '../notificationCenter';

const styles = (theme) => ({
	dashboardContentWrapper: {
		display: 'flex',
		width: '100vw'
	},
	dashboardPageContent: {
		display: 'flex',
		minHeight: '100vh'
	},
	splashContentWrapper: {
		display: 'flex',
		flexDirection: 'column',
		height: '100vh'
	},
	splashPageContent: {
		position: 'relative',
		minHeight: '100vh'
	}
});

class Layout extends Component {
	_renderDashboardLayout() {
		const { children, classes } = this.props;
		const { dashboardContentWrapper, dashboardPageContent } = classes;

		return (
			<div className={dashboardPageContent}>
				<div className={dashboardContentWrapper}>
					<SideNavbar />
					{children}
				</div>
			</div>
		);
	}

	_renderSplashLayout() {
		const { children, classes } = this.props;
		const { splashPageContent, splashContentWrapper } = classes;

		return (
			<div className={splashPageContent}>
				<div className={splashContentWrapper}>
					{children}
					<Footer />
				</div>
			</div>
		);
	}

	render() {
		const { isAuthed } = this.props;

		return (
			<Theme>
				<SnackbarProvider maxSnack={4}>
					{isAuthed
						? this._renderDashboardLayout()
						: this._renderSplashLayout()}

					<NotificationCenter />
				</SnackbarProvider>
			</Theme>
		);
	}
}

Layout.propTypes = {
	authUserSession: PropTypes.func,
	children: PropTypes.element,
	classes: PropTypes.object,
	location: PropTypes.object,
	isAuthed: PropTypes.bool,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		isAuthed: state.userReducer.get('isAuthed')
	};
};

export default connect(mapStateToProps, null)(withStyles(styles)(Layout));
