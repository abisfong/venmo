import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import sessionReducer from "./session_reducer";
import userErrorsReducer from "./error_reducers/user_errors";

const rootReducer = combineReducers({
  entities: combineReducers({
    users: usersReducer
  }),
  errors: combineReducers({
    user: userErrorsReducer
  }),
  session: sessionReducer
});

export default rootReducer;