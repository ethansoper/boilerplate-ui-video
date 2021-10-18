import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
	green: {
		background:
			'linear-gradient(114deg, rgba(140,221,57,1) 0%, rgba(118,184,48,1) 100%)'
	},
	progress: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		backgroundColor: 'rgba(110,110,110,.15)'
	},
	primaryInformation: {
		flexDirection: 'column',
		display: 'flex',
		flex: 1,
		padding: 0,
		margin: 0,
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '62%'
	},
	red: {
		backgroundColor: theme.palette.error.main
	},
	root: {
		flexDirection: 'column',
		display: 'flex',
		textTransform: 'none',
		height: '100%',
		padding: 0,
		justifyContent: 'center'
	},
	secondaryInformation: {
		flexDirection: 'column',
		display: 'flex',
		padding: 0,
		flex: 1,
		marginTop: '2px',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

class MonthToDateChargebacks extends Component {
	getChargebacksByPaymentType() {
		const { cardType, data } = this.props;

		if (this.data) {
			return this.data;
		}

		const chargeBackByType = data.filter((charge) => {
			return charge.pymt_obj_type === cardType;
		});

		this.data = chargeBackByType.length === 1 ? chargeBackByType[0] : [];

		return this.data;
	}

	getChargeBackPercentage() {
		const chargeBackByType = this.getChargebacksByPaymentType();
		return chargeBackByType.pct || 'NA';
	}

	getTransactionCount() {
		const chargeBackByType = this.getChargebacksByPaymentType();
		return chargeBackByType.settlements || 'NA';
	}

	getChargebackCount() {
		const chargeBackByType = this.getChargebacksByPaymentType();
		return chargeBackByType.charge_backs || 'NA';
	}

	render() {
		const { classes, hasBeenLoaded, isLoading, label } = this.props;
		const {
			green,
			primaryInformation,
			progress,
			red,
			root,
			secondaryInformation
		} = classes;

		if (isLoading || !hasBeenLoaded) {
			return (
				<Container className={progress}>
					<CircularProgress />
				</Container>
			);
		}

		const percentage = this.getChargeBackPercentage();
		const threshold = 0.8;
		const getCellColor = threshold < percentage ? red : green;

		return (
			<Container className={root}>
				<Container className={`${primaryInformation} ${getCellColor}`}>
					<Typography variant="h6">{label}</Typography>
					<Typography variant="h4">{percentage}&#37;</Typography>
				</Container>
				<Container className={`${secondaryInformation} ${getCellColor}`}>
					<Typography variant="caption">
						Transactions: {this.getTransactionCount()}
					</Typography>
					<Typography variant="caption">
						Chargebacks: {this.getChargebackCount()}
					</Typography>
				</Container>
			</Container>
		);
	}
}

MonthToDateChargebacks.propTypes = {
	cardType: PropTypes.string.isRequired,
	classes: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	hasBeenLoaded: PropTypes.bool,
	isLoading: PropTypes.bool,
	label: PropTypes.string.isRequired,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {};
};

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(withTranslation()(MonthToDateChargebacks)));
