import { createTheme } from '@mui/material/styles';

const defaultTheme = {
	panel: {
		height: '3.25rem',
		width: '230px'
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(',')
	},
	palette: {
		background: {
			default: '#ffffff'
		},
		error: {
			main: '#BF0000'
		},
		primary: {
			main: '#00d1b2'
		},
		secondary: {
			main: '#fafafa'
		},
		success: {
			main: '#74B72E'
		},
		navigation: {
			main: '#354052',
			text: '#9da6b6'
		},
		warning: {
			main: '#B79906'
		}
	}
};

export default createTheme(defaultTheme);
