import {ActionsType} from "./types";


type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

export type initialStateDialogsType = typeof initialState

const initialState = {

    dialogs: [
        {name: "Maks", id: 1},
        {name: "Jack", id: 2},
        {name: "Tim", id: 3},
        {name: "Sam", id: 4},
        {name: "Jack", id: 5}
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "how are you?"},
        {id: 2, message: "I hope so!"},
        {id: 3, message: "thank you"},
        {id: 4, message: "Your welcome"},
        {id: 5, message: "see a later"}
    ] as Array<MessagesType>
}


export const dialogsReducer = (state = initialState, action: ActionsType): initialStateDialogsType => {
    switch (action.type) {
        case "UPDATE-NEW-TEXT-MESSAGE": {
           // state.newTextMessage = action.newTextMessage
            return {
                ...state
            }
        }
        case "ADD-MESSAGE": {
            const newMessage: MessagesType = {
                id: 56,
                message: action.newTextMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state
    }
}


// Action Creators
export const updateNewTextMessageAC = (newTextMessage: string) => {
    return {
        type: "UPDATE-NEW-TEXT-MESSAGE",
        newTextMessage: newTextMessage
    } as const
}
export const addMessageAC = (newTextMessage: string) => {
    return {
        type: "ADD-MESSAGE",
        newTextMessage
    } as const
}

