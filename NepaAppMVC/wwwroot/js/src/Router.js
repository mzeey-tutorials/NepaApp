import { StringHelper } from "./Utilities/StringHelper";

export class Router {
	constructor() {
	}

	Route = async () => {
		const name = window.location.pathname;
		let pageName = name.split("/").pop();
		pageName = pageName.split(".").shift();
		let controllerName = StringHelper.ConvertToPascalCase(pageName);
		if (pageName === ""){
			controllerName = "Home";
		}

		const { [controllerName + 'Controller']: Controller } = await import(controllerName + 'Controller.js');
		const controller = new Controller();
		controller.Init();
	};
}