import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexFlow: 'column',
		backgroundColor: 'white',
		padding: 0,
		margin: 0,
		alignItems: 'center'
	}
});

class Users extends Component {
	render() {
		const { classes } = this.props;
		const { root } = classes;

		return (
			<Container className={root} maxWidth={false}>
				<p>Users</p>
			</Container>
		);
	}
}

Users.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		// yearToDateChgBak: state.chargebacksByMonthReducer.get('yearToDateChgBak')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// getMonthToDateChgBak: () => {
		// 	dispatch(chargebacksByMonthActions.getMonthToDateChargebacks());
		// }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Users));
