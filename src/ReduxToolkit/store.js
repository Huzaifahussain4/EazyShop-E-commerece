import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./rootReducers";
// import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    parentReducer: rootReducers,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
