import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";

import { NinjasComponent } from "./ninjas.component";
import { routes } from "./ninjas.routes";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild(routes),
        NativeScriptCommonModule,
    ],
    declarations: [NinjasComponent],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
export class NinjasModule { }
