# Unified.to File Manager example

This repo represents a sample application that display a file manager user-interface. It uses the Vue 3 framework, but should give the reviewer enough examples that it could be rewritten in React, Angular, or any other front-end framework.

The application call the Unified.to Cloud Storage API to retrieve a list of files and folders. It does so from the front-end, so the API key is exposed to the browser, which MUST NEVER be done in a real-world application. A production application would use a back-end server to call the Unified.to API, and thus store the API key securely.

## Running the application

```
cd vuejs
npm install
npm run dev
```
