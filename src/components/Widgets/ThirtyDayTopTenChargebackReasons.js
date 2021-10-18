import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography } from '@material-ui/core';

const styles = (theme) => ({
	dataContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	labels: {
		display: 'flex',
		flexDirection: 'column'
	},
	progress: {
		alignItems: 'center',
		display: 'flex',
		height: '100%',
		justifyContent: 'center'
	},
	reasonLabel: {
		width: '10px',
		height: '10px',
		marginRight: '4px'
	},
	reasonRow: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textTransform: 'none',
		textAlign: 'center',
		'& p': {
			marginBottom: '0px'
		}
	}
});

class ThirtyDayTopTenChargebackReasons extends Component {
	formatChargebackReasons(data) {
		const newChargebackReasons = [];
		data.forEach((entry) => {
			const newChargeback = {};

			newChargeback.name = entry.descr;
			newChargeback.value = entry.ctr;
			newChargebackReasons.push(newChargeback);
		});
		return newChargebackReasons;
	}

	render() {
		const {
			classes,
			data,
			isLoadingThirtyDayTopTenChargebackReasons,
			t
		} = this.props;
		const { dataContainer, progress, root } = classes;
		const COLORS = [
			'#27187E',
			'#758BFD',
			'#AEB8FE',
			'#F1F2F6',
			'#FF8600',
			'#2B2D42',
			'#8D99AE',
			'#EDF2F4',
			'#EF233C',
			'#D90429'
		];

		return (
			<Fragment>
				<Container>
					<Typography variant="h6" className={root}>
						{t('pages.dashboard.thirty-day-top-ten-chargeback-reasons.label')}
					</Typography>
				</Container>
				{isLoadingThirtyDayTopTenChargebackReasons ? (
					<Container className={progress}>
						<CircularProgress />
					</Container>
				) : (
					<Container className={dataContainer}>
						<PieChart height={300} width={300}>
							<Pie
								dataKey="value"
								data={this.formatChargebackReasons(data)}
								cx={'50%'}
								innerRadius={60}
								outerRadius={80}
								fill="#82ca9d"
							>
								{data.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip />
						</PieChart>
					</Container>
				)}
			</Fragment>
		);
	}
}

ThirtyDayTopTenChargebackReasons.propTypes = {
	barColor: PropTypes.string,
	classes: PropTypes.object,
	data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
	isLoadingThirtyDayTopTenChargebackReasons: PropTypes.bool,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		isLoadingThirtyDayTopTenChargebackReasons: state.chargebacksByMonthReducer
			.get('thirtyDayTopTenChargebackReasons')
			.get('isLoading')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(withTranslation()(ThirtyDayTopTenChargebackReasons)));
