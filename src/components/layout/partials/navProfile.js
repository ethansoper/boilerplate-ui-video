import React from 'react';
import { withStyles } from '@mui/styles';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const styles = (theme) => ({
	nameContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	photoContainer: {
		width: `calc(${theme.panel.width} / 2)`,
		backgroundColor: theme.palette.primary.main,
		display: 'flex',
		marginRight: '6px'
	},
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		padding: '0px',
		margin: '0px'
	}
});

const navProfile = (props) => {
	const { classes, user } = props;
	const { nameContainer, photoContainer, root } = classes;

	return (
		<Container maxWidth={false} className={root}>
			<Container maxWidth={false} className={nameContainer}>
				<Typography variant="subtitle1">{user.username}</Typography>
			</Container>
			<div className={photoContainer}></div>
		</Container>
	);
};

navProfile.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
	user: PropTypes.object
};

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.get('user')
	};
};

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(withTranslation()(navProfile)));
