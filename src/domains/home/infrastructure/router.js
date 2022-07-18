import AdminLayout from "../../../shared/presentation/layouts/AdminLayout";
import appRoute from "../../../shared/presentation/redirect-route";
import Favourite from "../presentation/pages/Favourite";
import Home from "../presentation/pages/Home";
import { favouritesRoute, homeRoute } from "./routes";

const homeRouter = {
	
	router: [
		{
			path: homeRoute,
			page: Home,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
		
		},
		{
			path: favouritesRoute,
			page: Favourite,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
		
		},
		
	],

	
};


export default homeRouter;
