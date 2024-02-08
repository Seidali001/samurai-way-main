import {addMessageAC, updateNewTextMessageAC} from "./dialogs-reducer";
import {
    addPostAC,
    ServerUserProfileType,
    setUsersProfileAC,
    setUsersProfileStatusAC,
} from "./profile-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching, toggleIsFollowingInProgress,
    unFollow
} from "./users-reducer";
import {setUserDataAC} from "./auth-reducer";


// Actions type
export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewTextMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUsersProfileAC>
    | ReturnType<typeof setUserDataAC>
    | ReturnType<typeof toggleIsFollowingInProgress>
    | ReturnType<typeof setUsersProfileStatusAC>


// State types
type PostsType = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePagesType = {
    posts: PostsType[]
    profile: ServerUserProfileType
}

export type DialogPagesType = {
    newTextMessage: string
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}
export type SidebarType = {}
