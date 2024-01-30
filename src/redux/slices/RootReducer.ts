import { combineReducers } from "redux";
import { helmetReducer } from "./HelmetSlice";
// ... import reducers for gear, dirtbike, and ATV

const rootReducer = combineReducers({
  helmet: helmetReducer,
  // ... add reducers for gear, dirtbike, and ATV
});

export default rootReducer;