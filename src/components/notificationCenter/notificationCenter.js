import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withSnackbar } from 'notistack';

class NotificationCenter extends Component {
	async componentDidUpdate() {
		const { enqueueSnackbar, message, messageType } = this.props;
		if (messageType === 'success') {
			enqueueSnackbar(message, {
				variant: 'success',
				anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
			});
		} else {
			enqueueSnackbar(message, {
				variant: 'error',
				anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
			});
		}
	}

	render() {
		const { children } = this.props;

		return <Fragment>{children}</Fragment>;
	}
}

NotificationCenter.propTypes = {
	children: PropTypes.element,
	enqueueSnackbar: PropTypes.func,
	message: PropTypes.string,
	messageType: PropTypes.string
};

const mapStateToProps = (state) => {
	return {
		message: state.notificationReducer.get('message'),
		messageTime: state.notificationReducer.get('messageTime'),
		messageType: state.notificationReducer.get('type')
	};
};

export default connect(mapStateToProps, null)(withSnackbar(NotificationCenter));
