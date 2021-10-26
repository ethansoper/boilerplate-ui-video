import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import { validatePassword } from '../validatePassword';

import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		padding: '0px'
	},
	icon: {
		color: 'lightgray',
		cursor: 'pointer'
	},
	iconGreen: {
		fill: 'green',
		maxWidth: '18px'
	},
	iconRed: {
		fill: theme.palette.error.main,
		maxWidth: '18px'
	},
	textField: {
		width: '50ch',
		marginBottom: '10px',
		textDecoration: 'none!important'
	}
});

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: '#fcfcfc',
		color: 'rgba(0, 0, 0, 0.87)',
		maxWidth: '50ch',
		fontSize: theme.typography.pxToRem(12),
		border: '1.5px solid #00d1b2',
		left: '4px'
	}
}))(Tooltip);

const PasswordValidationInput = (props) => {
	const { t, classes, label, onError, onChange, showTooltip, value } = props;
	const { container, icon, iconRed, iconGreen, textField } = classes;

	const [error, setError] = useState([
		'min',
		'max',
		'digits',
		'uppercase',
		'lowercase',
		'symbols'
	]);
	const [toolTipIsOpen, setToolTipIsOpen] = useState(false);
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordValidation = (value) => {
		const passwordValidationErrors = validatePassword(value);
		if (passwordValidationErrors.length) {
			setError(passwordValidationErrors);
			onError(true);
		} else {
			setError([]);
			onError(false);
		}
		onChange(value);
	};

	const togglePasswordShow = () => {
		setShowPassword(!showPassword);
	};

	const _toolTip = () => (
		<HtmlTooltip
			open={toolTipIsOpen}
			arrow={true}
			placement="right"
			title={
				<Fragment>
					<Typography color="inherit">
						{t('pages.register.password.header')}
					</Typography>
					<ul style={{ listStyle: 'none' }}>
						<li>
							{error.includes('min') || error.includes('max') ? (
								<ClearIcon className={iconRed} />
							) : (
								<CheckIcon className={iconGreen} />
							)}
							{t('pages.register.password.characters')}
						</li>
						<li>
							{error.includes('uppercase' || 'lowercase') ? (
								<ClearIcon className={iconRed} />
							) : (
								<CheckIcon className={iconGreen} />
							)}
							{t('pages.register.password.letters')}
						</li>
						<li>
							{' '}
							{error.includes('symbols') ? (
								<ClearIcon className={iconRed} />
							) : (
								<CheckIcon className={iconGreen} />
							)}
							{t('pages.register.password.special')}
						</li>
						<li>
							{error.includes('digits') ? (
								<ClearIcon className={iconRed} />
							) : (
								<CheckIcon className={iconGreen} />
							)}
							{t('pages.register.password.number')}
						</li>
					</ul>
				</Fragment>
			}
		>
			{showPassword ? (
				<VisibilityIcon className={icon} onClick={togglePasswordShow} />
			) : (
				<VisibilityOffIcon className={icon} onClick={togglePasswordShow} />
			)}
		</HtmlTooltip>
	);

	return (
		<Container className={container} maxWidth={false}>
			<TextField
				error={value === '' || !value ? null : error.length !== 0}
				size="small"
				onChange={(e) => handlePasswordValidation(e.target.value)}
				className={textField}
				variant="outlined"
				id="register-password-input"
				label={label || t('pages.register.input.temporarypassword')}
				type={showPassword ? 'text' : 'password'}
				value={value}
				onFocus={(e) => setToolTipIsOpen(showTooltip)}
				onBlur={(e) => setToolTipIsOpen(false)}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<LockIcon className={icon} />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="end">{_toolTip()}</InputAdornment>
					)
				}}
			/>
		</Container>
	);
};

PasswordValidationInput.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onChange: PropTypes.func,
	onError: PropTypes.func,
	showTooltip: PropTypes.bool,
	t: PropTypes.func,
	value: PropTypes.string
};

PasswordValidationInput.defaultProps = {
	showTooltip: true
};

export default withStyles(styles)(PasswordValidationInput);
