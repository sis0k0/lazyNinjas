import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule } from "nativescript-angular";

import { HomeComponent } from "./home.component";

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
