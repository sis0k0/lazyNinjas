# Lazy Ninjas

Lazy Ninjas is a simple NativeScript-Angular application, demonstrating several implementations of lazy loaded modules.

<h1>Installation</h1>

This app is built with the NativeScript CLI. Once you have the [CLI installed](http://docs.nativescript.org/angular/tutorial/ng-chapter-1#11-install-nativescript-and-configure-your-environment), start by cloning the repo:

```
$ git clone https://github.com/sis0k0/lazyNinjas.git
$ cd lazyNinjas
```

Then, use the `livesync` command to run the app:

```
$ tns livesync ios --watch
```
or
```
$ tns livesync android  --watch
```

<h1>Branches</h1>
This repo has two branches:

* The [**callback-loading** branch](https://github.com/sis0k0/lazyNinjas/tree/callback-loading) shows how to lazy load modules by passing a callback function to the `loadChildren` properties in the router configuration.
* The [**custom-module-loader** branch](https://github.com/sis0k0/lazyNinjas/tree/custom-module-loader) shows how to extract the loading logic to a custom module loader.