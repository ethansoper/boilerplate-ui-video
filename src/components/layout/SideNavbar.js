import React, { Component } from 'react';
import { withStyles } from '@mui/styles';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import Logout from './Logout';

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';

const styles = (theme) => ({
	admin: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0',
		'& span': {
			color: theme.palette.navigation.text
		}
	},
	avatar: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0'
	},
	divider: {
		marginTop: '20px',
		marginBottom: '20px'
	},
	icon: {
		minWidth: '30px',
		'& svg': {
			width: '.8em',
			color: theme.palette.navigation.text
			// color: theme.palette.primary
		}
	},
	listItem: {
		marginTop: '10px',
		padding: 0,
		'& p': {
			color: theme.palette.navigation.text
		}
	},
	logout: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0px 0px 20px 20px'
	},
	navigation: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		padding: '0',
		'& span': {
			color: theme.palette.navigation.text
		}
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		padding: '0',
		margin: 0,
		backgroundColor: theme.palette.navigation.main,
		width: '230px',
		height: '100vh',
		position: 'sticky',
		top: '0px',
		'& span': {
			textTransform: 'none'
		},
		'& a': {
			textDecoration: 'none'
		}
	}
});

class SideNavbar extends Component {
	render() {
		const { classes, t } = this.props;
		const {
			admin,
			divider,
			icon,
			logout,
			listItem,
			navigation,
			root
		} = classes;

		return (
			<Container className={root}>
				<Container>
					<Avatar />
					<Divider className={divider} />
					<Container className={navigation}>
						<Typography variant="caption">
							{t('components.layout.SideNavbar.label.navigation')}
						</Typography>
						<Link to="/dashboard">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t('components.layout.SideNavbar.routes.home')}
								/>
							</ListItem>
						</Link>
						<Link to="/reports">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<AssignmentIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t('components.layout.SideNavbar.routes.reports')}
								/>
							</ListItem>
						</Link>
						<Link to="/report-data">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<StorageIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t(
										'components.layout.SideNavbar.routes.report-data'
									)}
								/>
							</ListItem>
						</Link>
						<Link to="/report-data-2">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<StorageIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t(
										'components.layout.SideNavbar.routes.report-data-2'
									)}
								/>
							</ListItem>
						</Link>
					</Container>
					<Divider className={divider} />
					<Container className={admin}>
						<Typography variant="caption">
							{t('components.layout.SideNavbar.label.admin')}
						</Typography>
						<Link to="/account">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<AccountBoxIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t('components.layout.SideNavbar.routes.account')}
								/>
							</ListItem>
						</Link>
						<Link to="/users">
							<ListItem button className={listItem}>
								<ListItemIcon className={icon}>
									<PeopleIcon />
								</ListItemIcon>
								<ListItemText
									secondary={t('components.layout.SideNavbar.routes.users')}
								/>
							</ListItem>
						</Link>
					</Container>
				</Container>
				<Container className={logout}>
					<Logout />
				</Container>
			</Container>
		);
	}
}

SideNavbar.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(withTranslation()(SideNavbar));
