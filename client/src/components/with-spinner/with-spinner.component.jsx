import React from 'react';

import Spinner from '../spinner/spinner.component';

const WithSpinner =
	(WrappedComponent) =>
	({ isLoading, ...otherProps }) => {
		return isLoading ? (
			<Spinner />
		) : (
			<WrappedComponent {...otherProps} /> // {...otherProps} are not required. Clean it up later.
		);
	};

export default WithSpinner;
