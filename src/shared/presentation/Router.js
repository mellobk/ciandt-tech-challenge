import React from 'react';
import { Switch } from 'react-router-dom';

import homeRouter from '../../domains/home/infrastructure/router';


const Router = () => {
	const defaultLayout = ({ children }) => <>{children}</>;
	const routes = [ homeRouter];

	return (
		<Switch>
			{routes.map((route) => {
				return route?.router?.map(({ path, page: Component, routeComponent: Route, exact = true, layout, step, ...rest }) => (
					<Route
						key={path}
						exact={exact}
						path={path}
						component={Component}
						information= {false}
						step={step}
						layout={layout || route.layout || defaultLayout}
						{...rest}
					/> // use same key to avoid recreate layout on every render
				));
			})}
		</Switch>
	);
};

export default Router;
