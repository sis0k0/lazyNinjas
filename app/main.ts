import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

const platform = platformNativeScriptDynamic();
platform.bootstrapModule(AppModule);
