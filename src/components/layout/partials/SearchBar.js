import React, { useCallback, useState } from 'react';
import { withStyles } from '@mui/styles';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { throttle } from 'throttle-debounce';

import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

import SearchIcon from '@mui/icons-material/Search';

const styles = (theme) => ({
	adornment: {
		marginTop: '4px!important'
	},
	input: {
		display: 'flex',
		borderRadius: '20px',
		minWidth: '12em',
		'& input': {
			padding: 0,
			margin: '6px 0 6px'
		}
	},
	root: {
		display: 'flex',
		alignItems: 'center',
		padding: '0px',
		margin: '0 0 0 -126px',
		justifyContent: 'center'
	}
});

const SearchBar = (props) => {
	const { classes } = props;
	const { adornment, input, root } = classes;

	const [searchInput, setSearchInput] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	const executeSearch = useCallback(
		throttle(2000, (input) => {
			console.log('SEARCHING FOR', input);
		}),
		[]
	);

	const handleSearchInput = (e) => {
		const input = e.target.value;
		setSearchInput(input);
		executeSearch(input);
	};

	const handleSearchFocus = (isFocused) => {
		setIsSearching(isFocused);
	};

	return (
		<Container maxWidth={false} className={root}>
			<FormControl variant="filled">
				<FilledInput
					id="filled-adornment-amount"
					className={input}
					placeholder="Search"
					onChange={handleSearchInput}
					startAdornment={
						<InputAdornment position="start" className={adornment}>
							<SearchIcon />
						</InputAdornment>
					}
					onFocus={() => handleSearchFocus(true)}
					disableUnderline={true}
					size="small"
					type="search"
					value={searchInput}
					inputProps={{
						autoComplete: 'off'
					}}
				/>
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={isSearching}
					onClick={() => handleSearchFocus(false)}
				>
					<p>SEARCH CRITERIA</p>
				</Backdrop>
			</FormControl>
		</Container>
	);
};

SearchBar.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

const mapStateToProps = (state) => {
	return {
		// user: state.userReducer.get('user')
	};
};

export default connect(
	mapStateToProps,
	null
)(withStyles(styles)(withTranslation()(SearchBar)));
