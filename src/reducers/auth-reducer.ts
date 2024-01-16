import {ActionsType} from "./types";


type ServerAuthUserDataType = {
    id: number
    email: string
    login: string
}

export type initialStateUsersType = typeof initialState

const initialState = {
    id: 0,
    email: "",
    login: ""
}

export const authReducer = (state: initialStateUsersType = initialState, action: ActionsType): initialStateUsersType => {
    switch (action.type) {
        case "SET-USER-DATA": {
            return {
                ...state,
                ...action.userData
            }
        }

        default:
            return state
    }
}


// Action Creators
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const setUserDataAC = (authUserData: ServerAuthUserDataType) => {
    return {
        type: "SET-USER-DATA",
        userData: authUserData
    } as const
}