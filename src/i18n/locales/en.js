export default {
	components: {
		layout: {
			Footer: {
				copywrite: 'My Basic Copywrite'
			},
			Navbar: {
				routes: {
					home: 'Home',
					'log-in': 'Log in',
					register: 'Register'
				}
			},
			Router: {
				loading: 'Loading...'
			},
			SideNavbar: {
				label: {
					navigation: 'Navigation',
					admin: 'Admin'
				},
				routes: {
					home: 'Home',
					'log-out': 'Log Out',
					account: 'Account',
					users: 'Users'
				}
			}
		}
	},
	pages: {
		dashboard: {
			label: 'Dashboard'
		},
		home: {
			label: 'Boilerplate Dashboard',
			subtitle: 'Version 0.1'
		},
		login: {
			'forgot-password': 'Forgot password?',
			header: 'Log In',
			input: {
				password: 'Password',
				username: 'Username'
			},
			submit: 'Log In'
		}
	}
};
