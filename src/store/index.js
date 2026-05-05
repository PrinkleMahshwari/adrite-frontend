import { configureStore } from "@reduxjs/toolkit";

// setting up redux store (basic structure for now)
// this is just initial setup for development environment
// later we will add reducers (slices) here for state management

export const store = configureStore({
  reducer: {
    // currently empty
    // we will add slices like user, auth, cart etc. here later
  },
});