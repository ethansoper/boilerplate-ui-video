import React from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';

const styles = (theme) => ({
	root: {
		border: '1px dashed gold',
		padding: '0px',
		display: 'flex',
		flexWrap: 'wrap',
		flex: 1
	},
	tile: {
		border: '1px dotted aqua',
		// textDecoration: 'none',
		// listStyleType: 'none',
		display: 'flex',
		flexDirection: 'row',
		flexBasis: '33.333%',
		justifyContent: 'center',
		alignItems: 'center',
		'&:hover': {
			backgroundColor: 'purple'
		}
	}
});

// eslint-disable-next-line
const _TEST__users = [
	{ name: 'Ethan' },
	{ name: 'Tyler5' },
	{ name: 'Tyler4' },
	{ name: 'Tyler3' },
	{ name: 'Tyler2' },
	{ name: 'Tyler1' }
];

const UsersTiles = (props) => {
	const { classes } = props;
	const { root, tile } = classes;

	const renderUsers = () => {
		const users = [];
		_TEST__users.map((user) => {
			users.push(
				<div className={tile} key={user.name}>
					{user.name}
				</div>
			);
		});

		return users;
	};

	return (
		<Container className={root} maxWidth={false}>
			{renderUsers()}
		</Container>
	);
};

UsersTiles.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(UsersTiles);
