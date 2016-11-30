
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routes as homeRoutes } from "./home/home.routes";

const routes = [
    ...homeRoutes,
    {
        path: "ninjas",
        loadChildren: "./ninjas/ninjas.module#NinjasModule",
    }
];

export const routing = NativeScriptRouterModule.forRoot(routes);
