import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { filtersActions } from '../../containers/Filters';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = (theme) => ({
	filterDropdowns: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '10px'
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: 'lightgray'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
});

class Filters extends Component {
	componentDidMount() {
		const { getFilters, isLoadingFilters, filters } = this.props;

		if (!filters.size && !isLoadingFilters) {
			getFilters();
		}
	}

	onFilterUpdate(filter, value, label) {
		const { updateFilterSelectedOption } = this.props;
		const newFilterUpdate = {};
		newFilterUpdate[filter] = {
			value,
			label
		};

		updateFilterSelectedOption([newFilterUpdate]);
	}

	quickOption1 = () => {
		const { updateFilterSelectedOption } = this.props;

		updateFilterSelectedOption([
			{
				date_range: { value: 'today', label: 'Today' }
			}
		]);

		updateFilterSelectedOption([
			{
				processor: { value: 'BLSNP_SAN', label: 'BLSNP_SAN' }
			}
		]);
	};

	generateFilter(key, filter) {
		const { classes, selectedFilterOptions } = this.props;
		const { formControl, selectEmpty } = classes;

		const filterOptions = [];

		let selectedOption = selectedFilterOptions[key].value;

		filter.forEach((option, index) => {
			filterOptions.push(
				<MenuItem
					key={option.value + index}
					value={option.value}
					data-label={option.label}
				>
					{option.label}
				</MenuItem>
			);
		});

		return (
			<FormControl className={formControl} key={key}>
				<Select
					value={selectedOption}
					onChange={(e) =>
						this.onFilterUpdate(
							key,
							e.target.value,
							e.currentTarget.dataset.label
						)
					}
					displayEmpty
					className={selectEmpty}
					inputProps={{ 'aria-label': key }}
				>
					{filterOptions}
				</Select>
				<FormHelperText>{key}</FormHelperText>
			</FormControl>
		);
	}

	render() {
		const { classes, filters, isLoadingFilters } = this.props;
		const { filterDropdowns, root } = classes;

		const filterKeys = Object.keys(filters);

		return (
			<Container className={root} maxWidth={false}>
				{filters.size === 0 ? (
					<p>No Filters</p>
				) : isLoadingFilters ? (
					<p>Loading Filters...</p>
				) : (
					<Fragment>
						<Container className={filterDropdowns}>
							{filterKeys.map((filterKey) =>
								this.generateFilter(filterKey, filters[filterKey])
							)}
						</Container>
						<Container className={filterDropdowns}>
							<Button onClick={this.quickOption1}>Quick Select 1</Button>
						</Container>
					</Fragment>
				)}
			</Container>
		);
	}
}

Filters.propTypes = {
	classes: PropTypes.object,
	getFilters: PropTypes.func,
	filters: PropTypes.shape({
		[PropTypes.string]: PropTypes.arrayOf(
			PropTypes.shape({
				value: PropTypes.string,
				label: PropTypes.string
			})
		),
		size: PropTypes.number
	}),
	isLoadingFilters: PropTypes.bool,
	selectedFilterOptions: PropTypes.shape({
		[PropTypes.string]: PropTypes.string
	}),
	t: PropTypes.func,
	updateFilterSelectedOption: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		filters: state.filtersReducer.get('filters'),
		isLoadingFilters: state.filtersReducer.get('isLoadingFilters'),
		selectedFilterOptions: state.filtersReducer.get('selectedFilterOptions')
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getFilters: () => {
			dispatch(filtersActions.getFilters());
		},
		updateFilterSelectedOption: (filter, value) => {
			dispatch(filtersActions.updateFilterSelectedOption(filter, value));
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withStyles(styles)(Filters));
