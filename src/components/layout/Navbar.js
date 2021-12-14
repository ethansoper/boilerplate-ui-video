import React from 'react';
import { withStyles } from '@mui/styles';
import { withTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

import MessageCenter from './partials/messageCenter';
import NavProfile from './partials/navProfile';
import SearchBar from './partials/SearchBar';

const styles = (theme) => ({
	leftContainer: {
		display: 'flex',
		border: '1px dotted blue',
		width: theme.panel.width
	},
	centerContainer: {
		display: 'flex',
		border: '1px dotted red',
		flex: '1'
	},
	rightContainer: {
		display: 'flex',
		border: '1px dotted orange',
		width: theme.panel.width
	},
	logo: {
		borderRight: '1px solid white'
	},
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		minHeight: theme.panel.height,
		backgroundColor: '#fafafa',
		padding: '0px',
		margin: '0px'
	},
	searchSection: {}
});

const Navbar = (props) => {
	const { classes } = props;
	const {
		centerContainer,
		leftContainer,
		logo,
		rightContainer,
		root
	} = classes;

	return (
		<Container maxWidth={false} className={root}>
			<div className={leftContainer}>
				<div className={logo}>
					<p>App Name</p>
				</div>
			</div>
			<div className={centerContainer}>
				<MessageCenter />
				<SearchBar />
			</div>
			<div className={rightContainer}>
				<NavProfile />
			</div>
		</Container>
	);
};

Navbar.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(withTranslation()(Navbar));
