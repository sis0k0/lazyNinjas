import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";

import { routing } from "./app-routing";
import { HomeModule } from "./home/home.module";

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        HomeModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        routing,
    ],
})
export class AppModule { }
