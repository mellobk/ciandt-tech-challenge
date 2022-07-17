import AdminLayout from "../../../shared/presentation/layouts/AdminLayout";
import appRoute from "../../../shared/presentation/redirect-route";
import Home from "../presentation/pages/Home";
import { homeRoute } from "./routes";

const homeRouter = {
	
	router: [
		{
			path: homeRoute,
			page: Home,
			routeComponent: appRoute,
			layout: AdminLayout,
			exact: true,
		
		},
		
	],

	
};


export default homeRouter;
