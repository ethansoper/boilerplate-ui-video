import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = (props) => {
	const { isAuthed, Render } = props;

	return isAuthed ? <Render {...props} /> : <Redirect to="/" />;
};

PrivateRoute.propTypes = {
	isAuthed: PropTypes.bool,
	Render: PropTypes.func
};

export default PrivateRoute;
