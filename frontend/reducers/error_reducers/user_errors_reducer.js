import { 
  RECEIVE_USER,
  RECEIVE_USERS,
  RECEIVE_USER_ERRORS 
} from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/auth_actions";

const userErrorsReducer = data => {  
  return (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_CURRENT_USER:
      case RECEIVE_USERS:
      case RECEIVE_USER:
        return {};
      case RECEIVE_USER_ERRORS:
        const errors = action.errors.responseJSON;
        errors.forEach(error => { nextState[data.errorCount+=1] = error; });
        return nextState;
      default:
        return state;
    }
  }
}

export default userErrorsReducer;