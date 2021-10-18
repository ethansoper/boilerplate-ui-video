import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	YAxis,
	XAxis
} from 'recharts';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
	progress: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		backgroundColor: 'rgba(110,110,110,.15)'
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		textTransform: 'none',
		'& p': {
			marginBottom: '0px'
		}
	}
});

class ChargebackRates extends Component {
	sanitizeKeys(key) {
		const constants = {
			uo_amex: 'Amex',
			uo_discover: 'Discover',
			uo_mastercard: 'MasterCard',
			uo_visa: 'Visa'
		};

		return constants[key] ? constants[key] : 'NA';
	}

	formatChargebacks(data) {
		const newChargebacks = [];
		data.forEach((entry) => {
			const chargebackByMonth = newChargebacks.filter(
				(chargeback) => chargeback.name === entry.month
			);

			if (chargebackByMonth.length > 0) {
				chargebackByMonth[0][this.sanitizeKeys(entry.pymt_obj_type)] =
					entry.pct;
			} else {
				const newChargeback = {
					name: entry.month
				};

				newChargeback[this.sanitizeKeys(entry.pymt_obj_type)] = entry.pct;
				newChargebacks.push(newChargeback);
			}
		});
		return newChargebacks.sort((a, b) =>
			parseInt(a.name.replace('-', '')) > parseInt(b.name.replace('-', ''))
				? 1
				: -1
		);
	}

	render() {
		const { classes, data, hasBeenLoaded, isLoading, label } = this.props;
		const { progress, root } = classes;

		return (
			<Fragment>
				<Container className={root}>
					<Typography variant="h5">{label}</Typography>
				</Container>
				{isLoading || !hasBeenLoaded ? (
					<Container className={progress}>
						<CircularProgress />
					</Container>
				) : (
					<ResponsiveContainer width="100%" height="85%" className={root}>
						<LineChart
							width={500}
							height={300}
							data={this.formatChargebacks(data)}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="Amex" stroke="#8884d8" />
							<Line type="monotone" dataKey="Discover" stroke="#82ca9d" />
							<Line type="monotone" dataKey="MasterCard" stroke="#ffc658" />
							<Line type="monotone" dataKey="Visa" stroke="#905464" />
						</LineChart>
					</ResponsiveContainer>
				)}
			</Fragment>
		);
	}
}

ChargebackRates.propTypes = {
	classes: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	error: PropTypes.string,
	hasBeenLoaded: PropTypes.bool,
	isLoading: PropTypes.bool,
	label: PropTypes.string
};

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withTranslation()(ChargebackRates)));
