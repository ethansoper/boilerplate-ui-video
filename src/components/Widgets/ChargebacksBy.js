import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import WarningIcon from '@material-ui/icons/Warning';
import ErrorIcon from '@material-ui/icons/Error';

import {
	Bar,
	CartesianGrid,
	ComposedChart,
	ResponsiveContainer,
	Tooltip,
	YAxis,
	XAxis
} from 'recharts';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
	noData: {
		alignItems: 'center',
		display: 'flex',
		height: '80%',
		justifyContent: 'center',
		'& span': {
			color: theme.palette.warning.main
		},
		'& svg': {
			fontSize: '32px',
			fill: theme.palette.warning.main
		},
		flexDirection: 'column'
	},
	failure: {
		alignItems: 'center',
		display: 'flex',
		height: '80%',
		justifyContent: 'center',
		'& span': {
			color: theme.palette.error.main
		},
		'& svg': {
			fontSize: '32px',
			fill: theme.palette.error.main
		},
		flexDirection: 'column'
	},
	progress: {
		alignItems: 'center',
		display: 'flex',
		height: '80%',
		justifyContent: 'center'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textTransform: 'none',
		'& p': {
			marginBottom: '0px'
		}
	}
});

class ChargebacksBy extends Component {
	formatChargebackCounts(data) {
		const newChargebackCounts = [];
		data.forEach((entry) => {
			const newChargeback = {};
			const countsByLabel = Object.keys(entry)[0];

			newChargeback.name = entry[countsByLabel]
				? entry[countsByLabel].toString()
				: 'NA';
			newChargeback.count = entry.ctr;

			newChargebackCounts.push(newChargeback);
		});
		return newChargebackCounts.reverse();
	}

	render() {
		const { classes, data, error, isLoading, label } = this.props;
		const { failure, noData, progress, root } = classes;

		return (
			<Fragment>
				<Container className={root}>
					<Typography variant="h6">{label}</Typography>
				</Container>

				{isLoading ? (
					<Container className={progress}>
						<CircularProgress />
					</Container>
				) : error ? (
					<Container className={failure}>
						<ErrorIcon />
						<Typography variant="caption">{error}</Typography>
					</Container>
				) : !data.length ? (
					<Container className={noData}>
						<WarningIcon />
						<Typography variant="caption">No Results</Typography>
					</Container>
				) : (
					<ResponsiveContainer height="80%" className={root}>
						<ComposedChart
							layout="vertical"
							data={this.formatChargebackCounts(data)}
							margin={{
								top: 20,
								right: 20,
								bottom: 20,
								left: 20
							}}
						>
							<CartesianGrid stroke="#f5f5f5" />
							<XAxis
								hide
								dataKey="count"
								type="number"
								domain={[0, 'dataMax + 50']}
							/>
							<YAxis
								reversed
								dataKey="name"
								type="category"
								style={{ fontSize: '9px' }}
							/>
							<Tooltip />
							<Bar
								id={label}
								isAnimationActive={true}
								animationBegin={200}
								animationDuration={2000}
								barCategoryGap={10}
								dataKey="count"
								label={{ fill: 'white' }}
								fill={'#82ca9d'}
							/>
						</ComposedChart>
					</ResponsiveContainer>
				)}
			</Fragment>
		);
	}
}

ChargebacksBy.propTypes = {
	classes: PropTypes.object,
	error: PropTypes.string,
	isLoading: PropTypes.bool,
	label: PropTypes.string.isRequired,
	t: PropTypes.func
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
)(withStyles(styles)(withTranslation()(ChargebacksBy)));
