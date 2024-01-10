// Store methods
import {addPostAC, profileReducer, updateNewTextPostAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewTextMessageAC} from "./dialogs-reducer";

/*
type GetStateType = {
    type: "GET-STATE"
}
type SubscriberType = {
    type: "SUBSCRIBER"
    observer: () => void
}
*/



// Store type
/*export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscriber: (observer: () => void) => void
    dispatch: (action: ActionsType) => void

}*/

// State type
/*export type RootStateType = {
    profilePage: ProfilePagesType
    dialogPages: DialogPagesType
    sidebar: SidebarType
}*/


// Store
/*const store = {
    _state: {
        profilePage: {
            newText: "",
            posts: [
                {id: 1, text: "how are you?", likesCount: 11},
                {id: 2, text: "I hope so!", likesCount: 45},
                {id: 3, text: "thank you", likesCount: 23},
                {id: 4, text: "Your welcome", likesCount: 12},
                {id: 5, text: "see a later", likesCount: 2}
            ]
        },
        dialogPages: {
            newTextMessage: "",
            dialogs: [
                {name: "Maks", id: 1},
                {name: "Jack", id: 2},
                {name: "Tim", id: 3},
                {name: "Sam", id: 4},
                {name: "Jack", id: 5}
            ],
            messages: [
                {id: 1, message: "how are you?"},
                {id: 2, message: "I hope so!"},
                {id: 3, message: "thank you"},
                {id: 4, message: "Your welcome"},
                {id: 5, message: "see a later"}
            ]
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed")
    },
    getState() {
        return this._state
    },
    subscriber(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogPages = dialogsReducer(this.getState().dialogPages, action)
        this._callSubscriber()
    },
}*/

// export default store


/*    getState() {
        return this._state
    },
    addPost() {
        const post = {
            id: 8,
            text: this._state.profilePage.newText,
            likesCount: 123
        }
        this._state.profilePage.posts.push(post)
        this._callSubscriber()
    },
    addMessage(newMessageText: string) {
        const newMessage: MessagesType = {
            id: 56,
            message: newMessageText
        }
        this._state.dialogPages.messages.push(newMessage)
        this._callSubscriber()
    },
    updateNewTextPost(newText: string) {
        this._state.profilePage.newText = newText
        this._callSubscriber()
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },*/


/*
 addPost: () => void
 addMessage: (newText: string) => void
 updateNewTextPost: (newText: string) => void
 */


/*const state: RootStateType = {
    profilePage: {
        newText: "",
        posts: [
            {id: 1, text: "how are you?", likesCount: 11},
            {id: 2, text: "I hope so!", likesCount: 45},
            {id: 3, text: "thank you", likesCount: 23},
            {id: 4, text: "Your welcome", likesCount: 12},
            {id: 5, text: "see a later", likesCount: 2}
        ]
    },
    dialogPages: {
        newMessage: "",
        dialogs: [
            {name: "Maks", id: 1},
            {name: "Jack", id: 2},
            {name: "Tim", id: 3},
            {name: "Sam", id: 4},
            {name: "Jack", id: 5}
        ],
        messages: [
            {id: 1, message: "how are you?"},
            {id: 2, message: "I hope so!"},
            {id: 3, message: "thank you"},
            {id: 4, message: "Your welcome"},
            {id: 5, message: "see a later"}
        ]
    },
    sidebar: {}

}*/

/*export const addPost = () => {
    const post = {
        id: 8,
        text: state.profilePage.newText,
        likesCount: 123
    }
    state.profilePage.posts.push(post)
    renderTree()
}*/

/*export const addMessage = (newText: string) => {
    const newMessage: MessagesType = {
        id: 56,
        message: newText
    }
    state.dialogPages.messages.push(newMessage)
    renderTree()
}*/

/*export const updateNewTextPost = (newText: string) => {
    state.profilePage.newText = newText
    renderTree()
}*/

/*export const subscriber = (observer: () => void) => {
    renderTree = observer
}*/


/*let renderTree = () => {
    console.log("State changed")
}*/


/*else if (action.type === "SUBSCRIBER") {
           this._callSubscriber = action.observer
       } else if (action.type === "GET-STATE") {
           return this._state
       }*/
