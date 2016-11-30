import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { NinjasComponent } from "./ninjas.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NinjasComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot([
            {
                path: "",
                pathMatch: "full",
                component: HomeComponent
            },
            {
                path: "ninjas",
                component: NinjasComponent
            }
        ])
    ]
})
export class AppModule { }

