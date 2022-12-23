import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
});

export default store;

// import { createStore, compose } from "redux";
// import reducers from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// // import thunk from "redux-thunk";

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// export const store = createStore(reducers, {}, composeEnhancers());
