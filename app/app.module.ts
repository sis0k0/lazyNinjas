import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptModule, NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular";

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
        routing
    ],
    providers: [
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ]
})
export class AppModule { }
