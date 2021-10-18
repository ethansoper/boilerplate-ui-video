import React from 'react';
import { withTranslation } from 'react-i18next';

const LayoutWrapper = (WrappedComponent, Layout) => {
	const WC = (props) => {
		return (
			<Layout {...props}>
				<WrappedComponent {...props} />
			</Layout>
		);
	};
	return withTranslation()(WC);
};

export default LayoutWrapper;
