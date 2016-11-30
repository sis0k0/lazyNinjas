import {
    Injectable,
    Compiler,
    NgModuleFactory,
    NgModuleFactoryLoader
} from "@angular/core";

import { path, knownFolders } from "file-system";

const SEPARATOR = "#";

@Injectable()
export class NinjaModuleLoader implements NgModuleFactoryLoader {

    constructor(private compiler: Compiler) {
    }

    load(path: string): Promise<NgModuleFactory<any>> {
        let {modulePath, exportName} = this.splitPath(path);

        let loadedModule = require(modulePath)[exportName];
        if (!loadedModule) {
            throw new Error(`Cannot find "${exportName}" in "${modulePath}"`);
        }

        return this.compiler.compileModuleAsync(loadedModule);
    }

    private splitPath(path: string): {modulePath: string, exportName: string} {
        let [modulePath, exportName] = path.split(SEPARATOR);
        modulePath = getAbsolutePath(modulePath);

        if (typeof exportName === "undefined") {
            exportName = "default";
        }

        return {modulePath, exportName};
    }
}

function getAbsolutePath(relativePath: string) {
    return path.normalize(path.join(knownFolders.currentApp().path, relativePath));
}
