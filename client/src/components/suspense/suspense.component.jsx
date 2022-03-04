import React, { Suspense } from 'react';

import Spinner from '../spinner/spinner.component';

const SuspenseComponent = (Component) => {
	return (
		<Suspense fallback={<Spinner />}>
			<Component />
		</Suspense>
	);
};

export default SuspenseComponent;
