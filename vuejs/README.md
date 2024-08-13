# unified-filemanager

This repo represents a sample application that display a file manager user-interface. It uses the Vue 3 framework, but should give the reviewer enough examples that it could be rewritten in React, Angular, or any other front-end framework.

The application call the Unified.to Cloud Storage API to retrieve a list of files and folders. It does so from the front-end, so the API key is exposed to the browser, which MUST NEVER be done in a real-world application. A production application would use a back-end server to call the Unified.to API, and thus store the API key securely.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
