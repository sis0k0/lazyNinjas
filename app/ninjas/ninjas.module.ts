import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NinjasComponent } from "./ninjas.component";
import { routes } from "./ninjas.routes";

@NgModule({
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes)
    ],
    declarations: [NinjasComponent]
})
export class NinjasModule { }
