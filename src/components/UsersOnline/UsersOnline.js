import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column'
	}
});

const UsersOnline = (props) => {
	return <p>USERS</p>;
};

UsersOnline.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(UsersOnline));

// export default withStyles(styles)(UsersOnline);
