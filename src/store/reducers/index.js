import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import company from "./companyReducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["company"],
};

const rootReducer = combineReducers({
  company,
});

export default persistReducer(rootPersistConfig, rootReducer);
