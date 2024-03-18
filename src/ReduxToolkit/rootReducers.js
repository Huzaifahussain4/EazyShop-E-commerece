import { combineReducers } from "redux";
import GlobalStatesSlice from "./slice/globalStatesSlice";

export default combineReducers({
  globalStatesSlice: GlobalStatesSlice,
});
