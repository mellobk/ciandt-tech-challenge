import React from 'react';
import { Route } from 'react-router-dom';
import Proptypes from 'prop-types';





 const appRoute = ({ component: C, layout: Layout, ...rest }) => {

	return (
		<Route
			{...rest}
			render={(props) =>
			 (
					<Layout path={rest.path}>
						<C {...props} />
					</Layout>
				) 
			}
		/>
	);
};

appRoute.propTypes = {
	component: Proptypes.elementType.isRequired,
	layout: Proptypes.elementType.isRequired,
};

export default appRoute;