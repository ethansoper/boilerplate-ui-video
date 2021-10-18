import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import defaultTheme from './defaultTheme';

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Fragment>
				<CssBaseline />
				{children}
			</Fragment>
		</ThemeProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.element
};

export default Theme;
