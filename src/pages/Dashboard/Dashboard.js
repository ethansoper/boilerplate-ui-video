import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

// import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import CenterNavigation from '../../components/CenterNavigation';
import UsersTiles from '../../components/UsersTiles';
// import UsersOnline from '../../components/UsersOnline/UsersOnline';

const styles = (theme) => ({
	contentContainer: {
		border: '1px dashed aqua',
		padding: '0px',
		display: 'flex',
		flexDirection: 'column',
		flex: 1
	},
	highlightsOne: {
		border: '1px dashed aqua',
		display: 'flex',
		flexBasis: '20%'
	},
	highlightsTwo: {
		border: '1px dashed aqua',
		padding: '0px',
		display: 'flex',
		flexBasis: '40%'
	},
	highlightsThree: {
		border: '1px dashed aqua',
		display: 'flex',
		flexBasis: '40%'
	},
	leftDrawer: {
		width: theme.panel.width,
		flexShrink: 0,
		animationFillMode: 'forwards',
		animationDuration: '0.25s'
	},
	leftDrawerClose: {
		animationName: '$leftDrawerClose'
	},
	leftDrawerOpen: {
		animationName: '$leftDrawerOpen'
	},
	rightDrawer: {
		width: theme.panel.width,
		flexShrink: 0,
		animationFillMode: 'forwards',
		animationDuration: '0.25s'
	},
	rightDrawerClose: {
		animationName: '$rightDrawerClose'
	},
	rightDrawerOpen: {
		animationName: '$rightDrawerOpen'
	},
	root: {
		display: 'flex',
		padding: 0,
		margin: 0,
		border: '1px dotted green',
		height: '100%'
	},
	topContainer: {
		border: '1px dashed deeppink',
		padding: 0,
		display: 'flex',
		flex: 0.75
	},
	'@keyframes leftDrawerOpen': {
		from: {
			marginLeft: `calc(${theme.panel.width} * -1)`
		},
		to: {
			marginLeft: '0px'
		}
	},
	'@keyframes leftDrawerClose': {
		from: {
			marginLeft: '0px'
		},
		to: {
			marginLeft: `calc(${theme.panel.width} * -1)`
		}
	},
	'@keyframes rightDrawerOpen': {
		from: {
			marginRight: `calc(${theme.panel.width} * -1)`
		},
		to: {
			marginRight: '0px'
		}
	},
	'@keyframes rightDrawerClose': {
		from: {
			marginRight: '0px'
		},
		to: {
			marginRight: `calc(${theme.panel.width} * -1)`
		}
	}
});

const Dashboard = (props) => {
	const {
		classes,
		leftDrawerIsOpen,
		rightDrawerIsOpen
		// userHasBeenLoaded
	} = props;
	const {
		contentContainer,
		highlightsOne,
		highlightsTwo,
		highlightsThree,
		leftDrawer,
		leftDrawerClose,
		leftDrawerOpen,
		rightDrawer,
		rightDrawerClose,
		rightDrawerOpen,
		root,
		topContainer
	} = classes;

	// const [leftDrawerIsOpen, setLeftDrawerIsOpen] = useState(false);
	// const [rightDrawerIsOpen, setRightDrawerIsOpen] = useState(false);

	// const toggleLeftDrawer = () => {
	// 	setLeftDrawerIsOpen(!leftDrawerIsOpen);
	// };

	// const toggleRightDrawer = () => {
	// 	setRightDrawerIsOpen(!rightDrawerIsOpen);
	// };

	const renderLeftDrawer = () => {
		return (
			<div
				className={`${leftDrawer} ${
					leftDrawerIsOpen ? leftDrawerOpen : leftDrawerClose
				}`}
			>
				<p>LEFT DRAWER</p>
			</div>
		);
	};
	const renderRightDrawer = () => {
		return (
			<div
				className={`${rightDrawer} ${
					rightDrawerIsOpen ? rightDrawerOpen : rightDrawerClose
				}`}
			>
				<p>RIGHT DRAWER</p>
			</div>
		);
	};

	return (
		<Container className={root} maxWidth={false}>
			{renderLeftDrawer()}
			<Container className={contentContainer} maxWidth={false}>
				<Container className={topContainer} maxWidth={false}>
					{/* <Button variant="outlined" onClick={toggleLeftDrawer}>
						Left
					</Button>
					<Button variant="outlined" onClick={toggleRightDrawer}>
						Right
					</Button> */}
					<Container className={highlightsOne} maxWidth={false}>
						ONE
					</Container>
					<Container className={highlightsTwo} maxWidth={false}>
						<UsersTiles />
					</Container>
					<Container className={highlightsThree} maxWidth={false}>
						THREE
					</Container>
				</Container>
				{/* <Container className={bottomContainer} maxWidth={false}></Container> */}
				<CenterNavigation />
			</Container>
			{renderRightDrawer()}
		</Container>
	);
};

Dashboard.propTypes = {
	classes: PropTypes.object,
	leftDrawerIsOpen: PropTypes.bool,
	rightDrawerIsOpen: PropTypes.bool,
	t: PropTypes.func
	// userHasBeenLoaded: PropTypes.bool
};

const mapStateToProps = (state) => {
	return {
		userHasBeenLoaded: state.userReducer.get('userHasBeenLoaded'),
		leftDrawerIsOpen: state.systemReducer.get('leftDrawerIsOpen'),
		rightDrawerIsOpen: state.systemReducer.get('rightDrawerIsOpen')
	};
};

export default connect(mapStateToProps, null)(withStyles(styles)(Dashboard));
