import React, { useEffect } from 'react';
import { withStyles } from '@mui/styles';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { alertsActions } from '../../../containers/Alerts';

import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

import ChatIcon from '@mui/icons-material/Chat';
import ContactsIcon from '@mui/icons-material/Contacts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { systemActions } from '../../../containers/System';

const styles = (theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		padding: '0px',
		margin: '0px 0px 0px 4px',
		width: 'fit-content'
	},
	rowContainer: {
		display: 'flex',
		marginRight: '12px',
		'& svg': {
			fontSize: '22px'
		},
		'& .MuiBadge-badge': {
			right: '3px',
			top: '10px',
			padding: '0 4px',
			border: `2px solid ${theme.palette.background.paper}`
			// padding: '0 4px',
		}
	}
});

const MessageCenter = (props) => {
	const {
		alerts,
		classes,
		closeRightDrawer,
		getAlerts,
		hasBeenLoaded,
		isLoading,
		openRightDrawer,
		rightDrawerIsOpen
	} = props;
	const { root, rowContainer } = classes;

	useEffect(() => {
		if (!hasBeenLoaded && !isLoading) {
			getAlerts();
		}
	}, [hasBeenLoaded, isLoading]);

	const handleRightDrawer = () => {
		rightDrawerIsOpen ? closeRightDrawer() : openRightDrawer();
	};

	return (
		<Container maxWidth={false} className={root}>
			<div className={rowContainer}>
				<Badge badgeContent={0} color="primary">
					<IconButton aria-label="delete">
						<PeopleAltIcon />
					</IconButton>
				</Badge>
				<Badge
					badgeContent={(alerts && alerts.unreadMessages) || 0}
					color="primary"
				>
					<IconButton
						aria-label="delete"
						onClick={handleRightDrawer}
						color={rightDrawerIsOpen ? 'primary' : 'default'}
					>
						<ChatIcon />
					</IconButton>
				</Badge>
				<Badge badgeContent={0} color="primary">
					<IconButton aria-label="delete">
						<ContactsIcon />
					</IconButton>
				</Badge>
			</div>
		</Container>
	);
};

MessageCenter.propTypes = {
	alerts: PropTypes.object,
	classes: PropTypes.object,
	closeRightDrawer: PropTypes.func,
	error: PropTypes.string,
	getAlerts: PropTypes.func,
	hasBeenLoaded: PropTypes.bool,
	isLoading: PropTypes.bool,
	openRightDrawer: PropTypes.func,
	rightDrawerIsOpen: PropTypes.bool,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		alerts: state.alertsReducer.get('alerts'),
		error: state.alertsReducer.get('error'),
		hasBeenLoaded: state.alertsReducer.get('hasBeenLoaded'),
		isLoading: state.alertsReducer.get('isLoading'),
		rightDrawerIsOpen: state.systemReducer.get('rightDrawerIsOpen')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getAlerts: () => {
			dispatch(alertsActions.getAlerts());
		},
		closeRightDrawer: () => {
			dispatch(systemActions.closeRightDrawer());
		},
		openRightDrawer: () => {
			dispatch(systemActions.openRightDrawer());
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withTranslation()(MessageCenter)));
