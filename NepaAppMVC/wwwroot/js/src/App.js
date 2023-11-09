import { GlobalController } from "./Controllers/GlobalController.js";
import { Router } from "./Router.js";

class App {
    static Init() {
        const router = new Router();
        router.Route();
        const globalController = new GlobalController();
        globalController.Init();
    }
}

App.Init();