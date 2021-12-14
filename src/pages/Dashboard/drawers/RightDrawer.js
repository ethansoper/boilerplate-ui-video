import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

const styles = (theme) => ({
	root: {
		display: 'flex',
		padding: 0,
		margin: 0,
		border: '1px dotted green',
		height: '100%'
	}
});

const RightDrawer = (props) => {
	const { classes } = props;
	const { root } = classes;

	return (
		<Container className={root} maxWidth={false}>
			<p>RIGHT</p>
		</Container>
	);
};

RightDrawer.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		// userHasBeenLoaded: state.userReducer.get('userHasBeenLoaded')
	};
};

export default connect(mapStateToProps, null)(withStyles(styles)(RightDrawer));
