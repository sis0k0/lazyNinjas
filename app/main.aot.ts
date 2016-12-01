import { platformNativeScript } from "nativescript-angular/platform-static";

import { AppModuleNgFactory } from "./app.module.ngfactory";

const platform = platformNativeScript();
platform.bootstrapModuleFactory(AppModuleNgFactory);