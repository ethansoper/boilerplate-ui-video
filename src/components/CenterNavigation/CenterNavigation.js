import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const styles = (theme) => ({
	root: {
		border: '1px dashed gold',
		padding: '0px',
		display: 'flex',
		flex: 1
	}
});

const CenterNavigation = (props) => {
	const { classes } = props;
	const { root } = classes;

	const [value, setValue] = useState('1');

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Container className={root} maxWidth={false}>
			<Box sx={{ width: '100%', typography: 'body1' }}>
				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Item One" value="1" />
							<Tab label="Item Two" value="2" />
							<Tab label="Item Three" value="3" />
						</TabList>
					</Box>
					<TabPanel value="1">Item One</TabPanel>
					<TabPanel value="2">Item Two</TabPanel>
					<TabPanel value="3">Item Three</TabPanel>
				</TabContext>
			</Box>
		</Container>
	);
};

CenterNavigation.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func
};

export default withStyles(styles)(CenterNavigation);
