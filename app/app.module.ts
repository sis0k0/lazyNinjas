import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { routing } from "./app-routing";
import { HomeModule } from "./home/home.module";

import { AppComponent } from "./app.component";

import { NinjaModuleLoader } from "./ninja-module-loader";

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [
        HomeModule,
        NativeScriptModule,
        NativeScriptRouterModule,
        routing
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NinjaModuleLoader }
    ]
})
export class AppModule { }
