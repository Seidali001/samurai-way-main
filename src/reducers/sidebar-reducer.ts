import {ActionsType, SidebarType} from "./types";
import {AppRootStateType} from "../redux-store/redux-store";
import sidebar from "../components/Sidebar/Sidebar";

type InitialStateType = {

}

const InitialState = {}

export const sidebarReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    return state
}