## Technical Stacks

- Vue 2

- Vuex 3

- TypeScript

- Class Component

- Unit testing with Jest and Vue testing library


## Architecture

All form data is stored in Vuex store. There is a store variable for step.

When user clicks `Next` or `Back` button, it mutates the store variable and based on this value it mounts the different Step component or Fail page.
