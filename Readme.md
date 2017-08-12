# Lazy Ninjas

Lazy Ninjas is a simple NativeScript-Angular application, demonstrating several implementations of lazy loaded modules. Please check out the [Optimizing app loading time with Angular Lazy Loading](https://www.nativescript.org/blog/optimizing-app-loading-time-with-angular-2-lazy-loading) article.

<h1>Installation</h1>

This app is built with the NativeScript CLI. Once you have the [CLI installed](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment), start by cloning the repo:

```
$ git clone https://github.com/sis0k0/lazyNinjas.git
$ cd lazyNinjas
```

Then, use the CLI to run the app:

```
$ tns run [ios|android]
```

The `aot` and `nested-lazy-modules` are set up to use webpack. To bundle the app use:
```
$ npm run start-[ios|android]-bundle
```

<h1>Branches</h1>
This repo has several branches:

* The [**aot** branch](https://github.com/sis0k0/lazyNinjas/tree/aot) shows how to use lazy loaded modules with NSModuleFactoryLoader and is webpack/AoT enabled.
* The [**nested-lazy-modules** branch](https://github.com/sis0k0/lazyNinjas/tree/nested-lazy-modules) shows how to set up a module hierarchy with nested lazy loaded NgModules.
* The [**callback-loading** branch](https://github.com/sis0k0/lazyNinjas/tree/callback-loading) shows how to lazy load modules by passing a callback function to the `loadChildren` properties in the router configuration.
* The [**custom-module-loader** branch](https://github.com/sis0k0/lazyNinjas/tree/custom-module-loader) shows how to extract the loading logic to a custom module loader.

