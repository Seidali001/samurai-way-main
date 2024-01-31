import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "../reducers/profile-reducer";
import {dialogsReducer} from "../reducers/dialogs-reducer";
import {usersReducer} from "../reducers/users-reducer";
import {authReducer} from "../reducers/auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPages: dialogsReducer,
    usersPage: usersReducer,
    authData: authReducer,
    form: formReducer
})

const store = createStore( rootReducer, applyMiddleware(thunkMiddleware))
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export default store