import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [NativeScriptRouterModule],
    declarations: [HomeComponent]
})
export class HomeModule { }
