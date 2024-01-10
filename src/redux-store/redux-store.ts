import {combineReducers, createStore} from "redux";
import {profileReducer} from "../reducers/profile-reducer";
import {dialogsReducer} from "../reducers/dialogs-reducer";
import {usersReducer} from "../reducers/users-reducer";



const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPages: dialogsReducer,
    usersPage: usersReducer
})

const store = createStore( rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>
// @ts-ignore
window.store = store
export default store