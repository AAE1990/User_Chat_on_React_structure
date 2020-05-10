import { createStore, combineReducers,  } from "redux";
import profileReducer from "./profile-reducer";
import { reducer as formReducer } from 'redux-form'
import floodChatReducer from "./floodChat-reduser";
import workingChatReducer from "./workingChat-reducer";
import usersRedusers from "./users-redusers";

let reducers = combineReducers({
    profileData: profileReducer,
    floodChatData: floodChatReducer,
    workingChatData: workingChatReducer,
    usersData: usersRedusers,
    form: formReducer
});

const store = createStore(reducers);

window.store = store;

export default store;