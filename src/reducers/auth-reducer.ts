import {ActionsType} from "./types";
import {authMeApi} from "../api/authMe";
import {Dispatch} from "redux";


export type ServerAuthUserDataType = {
    id: number
    email: string
    login: string
}

export type initialStateAuthType = typeof initialState

const initialState = {
    id: 0,
    email: "",
    login: "",
    isAuth: false
}

export const authReducer = (state: initialStateAuthType = initialState, action: ActionsType): initialStateAuthType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }

        default:
            return state
    }
}


// Action Creators
/*export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}*/
export const setUserDataAC = (data: ServerAuthUserDataType) => {
    return {
        type: "SET-USER-DATA",
        data
    } as const
}

export const authMeTC = () => (dispatch: Dispatch) => {
    authMeApi.getAuthMe()
        .then(data => {
            //console.log(data.data.resultCode)
            if (data.data.resultCode === 0) {
               // console.log(data.data.data)
                dispatch(setUserDataAC(data.data.data))
            }
           // dispatch(setUserDataAC(data))
        })
        .catch(error => {
            console.error("Error auth me:", error);
        });
}