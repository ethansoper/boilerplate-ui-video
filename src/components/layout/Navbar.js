import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	auth: {
		display: 'flex',
		margin: '10px',
		'& a': {
			textTransform: 'none',
			backgroundColor: theme.palette.secondary.main,
			marginLeft: '8px'
		}
	},
	greeting: {
		display: 'flex',
		alignItems: 'center',
		'& p': {
			marginRight: '20px'
		}
	},
	registerButton: {
		textTransform: 'none',
		color: 'white'
	},
	nav: {
		display: 'flex',
		'& a': {
			textTransform: 'none'
		}
	},
	root: {
		display: 'flex',
		justifyContent: 'space-between',
		minHeight: '3.25rem',
		backgroundColor: '#fafafa'
	}
});

const Navbar = (props) => {
	const { classes, t } = props;
	const { auth, nav, registerButton, root } = classes;

	return (
		<Container className={root}>
			<div className={nav}>
				<Button href="/">{t('components.layout.Navbar.routes.home')}</Button>
			</div>
			<div className={auth}>
				<Fragment>
					<Button
						className={registerButton}
						to="/register"
						variant="contained"
						color="primary"
					>
						{t('components.layout.Navbar.routes.register')}
					</Button>
					<Button href="/login">
						{t('components.layout.Navbar.routes.log-in')}
					</Button>
				</Fragment>
			</div>
		</Container>
	);
};

Navbar.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(Navbar);
