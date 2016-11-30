import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule
    ],
    declarations: [HomeComponent]
})
export class HomeModule {
}
