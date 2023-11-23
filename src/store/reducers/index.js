import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import calendar from "./calendarReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["calendar"],
};

const rootReducer = combineReducers({
  calendar,
});

export default persistReducer(rootPersistConfig, rootReducer);
