import { StringHelper } from "./Utilities/StringHelper";

export class Router {
	constructor() {
	}


	Route = async () => {
		const controllers = {
			Home:  /* webpackChunkName: "HomeController" */ `./Controllers/HomeController.js`,
		};


		const name = window.location.pathname;
		let pageName = name.split("/").pop();
		pageName = pageName.split(".").shift();
		let controllerName = StringHelper.ConvertToPascalCase(pageName);
		if (pageName === ""){
			controllerName = "Home";
		}

		if (controllerName in controllers) {
			const controllerPath = controllers[controllerName];
			const controller = await import(/* webpackChunkName: "[request]" */ `${controllerPath}`);
			const controllerInstance = new controller[`${controllerName}Controller`]();
			controllerInstance.Init();
		} else {
			// Handle case where controllerName is not found
			console.error(`Controller not found for ${controllerName}`);
		}
	};
}