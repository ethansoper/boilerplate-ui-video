import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';

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

class Account extends Component {
	render() {
		const { classes } = this.props;
		const { root } = classes;

		return (
			<Container className={root} maxWidth={false}>
				<p>Account</p>
			</Container>
		);
	}
}

Account.propTypes = {
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
)(withStyles(styles)(Account));
