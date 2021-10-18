import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
// import { getUserPreference } from '../../utilities/getUserPreference';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
	root: {
		display: 'flex',
		padding: 0,
		margin: 0
	}
});

const Dashboard = (props) => {
	const { classes, userHasBeenLoaded } = props;
	const { root } = classes;

	return (
		<Container className={root} maxWidth={false}>
			{userHasBeenLoaded ? (
				<p>Dashboard Page</p>
			) : (
				<p>Loading User Preferences</p>
			)}
		</Container>
	);
};

Dashboard.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
	userHasBeenLoaded: PropTypes.bool
};

const mapStateToProps = (state) => {
	return {
		userHasBeenLoaded: state.userReducer.get('userHasBeenLoaded')
	};
};

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard));
