import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import Amplify from 'aws-amplify';
import config from './config';

// import 'react-grid-layout/css/styles.css';
// import 'react-resizable/css/styles.css';

// Amplify.configure({
// 	Auth: {
// 		mandatorySignIn: true,
// 		region: config.cognito.REGION,
// 		userPoolId: config.cognito.USER_POOL_ID,
// 		userPoolWebClientId: config.cognito.APP_CLIENT_ID
// 	}
// });

ReactDOM.render(<App />, document.getElementById('root'));
