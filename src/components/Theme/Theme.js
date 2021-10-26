import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import defaultTheme from './defaultTheme';

const Theme = ({ children }) => {
	return (
		<StyledEngineProvider injectFirst>
			<MuiThemeProvider theme={defaultTheme}>
				<ThemeProvider theme={defaultTheme}>
					<Fragment>
						<CssBaseline />
						{children}
					</Fragment>
				</ThemeProvider>
			</MuiThemeProvider>
		</StyledEngineProvider>
	);
};

Theme.propTypes = {
	children: PropTypes.element
};

export default Theme;
