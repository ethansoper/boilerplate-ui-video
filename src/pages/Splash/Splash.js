import React from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const styles = (theme) => ({
	pageContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flexBasis: '100%',
		width: '100%',
		alignItems: 'center',
		'& div': {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: '25px'
		}
		// background:
		// 'linear-gradient(114deg, rgba(57,181,221,1) 0%, rgba(35,111,135,1) 100%)'
	},
	videoContainer: {
		display: 'flex',
		minWidth: '720px',
		minHeight: '480px'
	}
});

const Splash = (props) => {
	const {
		classes
		// t
	} = props;
	const { pageContainer, videoContainer } = classes;

	return (
		<Container className={pageContainer} maxWidth={false}>
			<div>
				<Typography variant="h2" component="h2">
					Heading
				</Typography>
				<Typography variant="body2" component="p">
					My text!
				</Typography>
			</div>
			<Paper elevation={3}>
				<Container className={videoContainer} maxWidth={false}>
					<p>Video</p>
				</Container>
			</Paper>
		</Container>
	);
};

Splash.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(Splash);
