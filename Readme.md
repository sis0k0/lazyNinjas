# Lazy Ninjas

Lazy Ninjas is a simple NativeScript-Angular application, demonstrating several implementations of lazy loaded modules. Please check out the [Optimizing app loading time with Angular Lazy Loading](https://www.nativescript.org/blog/optimizing-app-loading-time-with-angular-2-lazy-loading) article.

# Installation

Start by cloning the repo:

```bash
$ git clone https://github.com/sis0k0/lazyNinjas.git
$ cd lazyNinjas
```

Then, install the NativeScript CLI:

```bash
npm i -g nativescript
```

Now, you can use the `preview` command to build and start the app:

```bash
$ tns preview
```

If you want to bundle the app with webpack, append the `--bundle` flag:

```bash
$ tns preview --bundle
```

# Branches

## Recommended:

1. The [**aot** branch](https://github.com/sis0k0/lazyNinjas/tree/aot) shows how to use a single lazy module.

1. The [**nested-lazy-modules** branch](https://github.com/sis0k0/lazyNinjas/tree/nested-lazy-modules) shows how to set up a module hierarchy with nested lazily loaded NgModules.

## Deprecated:
1. The [**callback-loading** branch](https://github.com/sis0k0/lazyNinjas/tree/callback-loading) shows how to lazy load modules by passing a callback function to the `loadChildren` properties in the router configuration.

2. The [**custom-module-loader** branch](https://github.com/sis0k0/lazyNinjas/tree/custom-module-loader) shows how to extract the loading logic to a custom module loader.

