import { createMuiTheme } from '@material-ui/core/styles';

const defaultTheme = {
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

export default createMuiTheme(defaultTheme);
