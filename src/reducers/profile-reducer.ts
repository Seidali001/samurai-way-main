import {ActionsType} from "./types";
import {profileApi} from "../api/profile";
import {Dispatch} from "redux";


type ContactType = {
    facebook: string,
    website: null,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: null,
    github: string,
    mainLink: null
}

type PhotosType = {
    small: string,
    large: string
}

export type ServerUserProfileType = {
    aboutMe: string,
    contacts: ContactType,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: PhotosType
}

export type PostsType = {
    id: number
    text: string
    likesCount: number
}



export type initialStateProfileType = typeof initialState

const initialState = {

    posts: [
        {id: 1, text: "how are you?", likesCount: 11},
        {id: 2, text: "I hope so!", likesCount: 45},
        {id: 3, text: "thank you", likesCount: 23},
        {id: 4, text: "Your welcome", likesCount: 12},
        {id: 5, text: "see a later", likesCount: 2}
    ] as Array<PostsType>,
    profile: {} as ServerUserProfileType,
    status: ""
}

export const profileReducer = (state = initialState, action: ActionsType): initialStateProfileType => {
    switch (action.type) {

        case "ADD-POST": {
            const post = {
                id: 8,
                text: action.postText,
                likesCount: 123
            }
            return {
                ...state,
                posts: [post, ...state.posts],

            }
        }

        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "SET-USER-PROFILE-STATUS": {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}


// Action Creators
export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const
}

export const setUsersProfileAC = (profile: ServerUserProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export const setUsersProfileStatusAC = (status: string) => {
    return {
        type: "SET-USER-PROFILE-STATUS",
        status
    } as const
}



export const setUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(data => {
            dispatch(setUsersProfileAC(data))
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}
export const getUserProfileStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getProfileStatus(userId)
        .then(res => {
            dispatch(setUsersProfileStatusAC(res.data))
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}

export const updateUserProfileStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateProfileStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUsersProfileStatusAC(status))
            }
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}



