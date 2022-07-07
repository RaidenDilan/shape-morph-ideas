# PROJECT_NAME

<br/>

### Approach

1. Model is built with using ReactDOM.createPortal.
2. Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. A typical use case for portals is when a parent component has an overflow: hidden or z-index style.
3. Initially I was going to use CSSTransition component from react-transition-group to animate the modal in and out.

### Blockers:

1. Using react-transition-group in React 18 has an issue. Issue is with CSSTransition component state transitions classNames.

<br/>

# Installation and Setup Instructions

**_NOTE:_** <span style="color:red">This is a custom Vite JS Boilerplate I have been working on as a side project for my tech tasks</span>

This Web-App runs with [Vite.js](https://vitejs.dev/) to allow next-generation Front-End tooling.

<br/>

## Installation 👷‍♂️

prerequisites: NPM (as global)

```bash
nvm use
npm ci
```

<br/>

## Run in dev mode

This will start the React application on localhost:3000

```bash
npm run dev
```

<br/>

## Tests

This following command will run the all tests in frontend project

```bash
npm run test
```

<br/>

## Unit

This following command will run the unit tests in frontend project

```bash
npm run unit
```

<br/>

## Storybook

This will start Storybook on localhost:6006

```bash
npm run storybook
```
