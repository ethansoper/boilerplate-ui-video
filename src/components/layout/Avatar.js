import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import PersonIcon from '@material-ui/icons/Person';

const styles = (theme) => ({
	avatar: {
		width: theme.spacing(10),
		height: theme.spacing(10)
	},
	avatarContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyItems: 'center',
		marginTop: '30px'
	},
	root: {
		display: 'flex',
		flexDirection: 'column'
	},
	username: {
		marginTop: '10px',
		color: theme.palette.navigation.text
	}
});

class UserAvatar extends Component {
	render() {
		const { classes, user } = this.props;
		const { avatar, avatarContainer, root, username } = classes;

		return (
			<Container className={root}>
				<div className={avatarContainer}>
					<Avatar className={avatar}>
						<PersonIcon />
					</Avatar>
					<Typography className={username} variant="caption">
						{user.username}
					</Typography>
				</div>
			</Container>
		);
	}
}

UserAvatar.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
	user: PropTypes.shape({
		username: PropTypes.string
	})
};

const mapStateToProps = (state) => {
	return {
		user: state.userReducer.get('user')
	};
};

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(withTranslation()(UserAvatar)));
