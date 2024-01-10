// Actions type
import {addMessageAC, updateNewTextMessageAC} from "./dialogs-reducer";
import {addPostAC, updateNewTextPostAC} from "./profile-reducer";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unFollow
} from "./users-reducer";


// Actions type
export type ActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewTextPostAC>
    | ReturnType<typeof updateNewTextMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>


// State types

type PostsType = {
    id: number
    text: string
    likesCount: number
}
export type ProfilePagesType = {
    newText: string
    posts: PostsType[]
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
