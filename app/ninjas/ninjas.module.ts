import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NinjasComponent } from "./ninjas.component";
import { routes } from "./ninjas.routes";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes),
    ],
    declarations: [NinjasComponent]
})
export class NinjasModule { }
