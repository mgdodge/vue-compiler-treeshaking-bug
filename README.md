# Vue 3 tree-shaking bug

This repo is organized as follows:
* `lib-vite` - This directory is the source for what should be a tree-shakeable component. It uses [vite 2.6.0-beta.w](https://github.com/vitejs/vite/tree/v2.6.0-beta.2) in `library mode` to create the library package
  * Running `npm run build && npm pack` here results in an installable npm module, `lib-vite-0.0.0.tgz`
* `app-vite` - This directory is a standard vite app, which uses `lib-vite`
  * The `lib-vite-0.0.0.tgz` created by the `lib-vite` build/pack process is copied into this directory and installed into the app
* `app-cli` - This directory is a standard vue cli app
  * The `lib-vite-0.0.0.tgz` created by the `lib-vite` build/pack process is copied into this directory and installed into the app

## Reproducing the bug
__Setup__

* Clone repo
* Inside the `lib-vite` directory, run `npm install`, followed by `npm run build && npm pack` - this will create the file `lib-vite-0.0.0.tgz`
* Copy the resulting `lib-vite-0.0.0.tgz` into each app directory (`app-vite` and `app-cli`)
* In each app directory:
  * Run `npm install` followed by `npm run build`


__Verify tree-shaking__

The "optimized" javascript resulting from each build will include a "vendors" file which should include a tree-shaken version of `lib-vite`. Search this file for the following strings:

    "The cat is named"
    "The dog is named"
    "The fish is named"

If tree-shaking worked, you should not see `The fish is named` anywhere in the output. The unused code is still included.


## What is expected?

Code output should be tree-shakeable


## What is actually happening?

Code is not tree-shakeable