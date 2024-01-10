import {ActionsType} from "./types";


type PostsType = {
    id: number
    text: string
    likesCount: number
}

export type initialStateProfileType = typeof initialState

const initialState = {
    newText: "",
    posts: [
        {id: 1, text: "how are you?", likesCount: 11},
        {id: 2, text: "I hope so!", likesCount: 45},
        {id: 3, text: "thank you", likesCount: 23},
        {id: 4, text: "Your welcome", likesCount: 12},
        {id: 5, text: "see a later", likesCount: 2}
    ] as Array<PostsType>
}

export const profileReducer = (state = initialState, action: ActionsType): initialStateProfileType => {
    switch (action.type) {

        case "ADD-POST": {
            const post = {
                id: 8,
                text: state.newText,
                likesCount: 123
            }
            return {
                ...state,
                posts: [post, ...state.posts],
                newText: ""
            }
        }

        case "UPDATE-NEW-TEXT-POST": {
            return {
                ...state,
                newText: action.newText
            }
        }
        default:
            return state
    }
}


// Action Creators
export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewTextPostAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-TEXT-POST",
        newText: newText
    } as const
}