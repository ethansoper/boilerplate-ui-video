import React from 'react';
import { withTranslation } from 'react-i18next';
import Container from '@mui/material/Container';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

const styles = (theme) => ({
	root: {
		backgroundColor: '#fafafa',
		display: 'flex',
		height: '2.5rem',
		justifyContent: 'center',
		padding: '3rem 1.5rem 6rem',
		width: '100%',
		'&p': {
			textAlign: 'center'
		}
	}
});

const Footer = (props) => {
	const { classes, t } = props;
	const { root } = classes;
	return (
		<Container maxWidth={false} className={root}>
			<p>{t('components.layout.Footer.copywrite')}</p>
		</Container>
	);
};

Footer.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(withTranslation()(Footer));
