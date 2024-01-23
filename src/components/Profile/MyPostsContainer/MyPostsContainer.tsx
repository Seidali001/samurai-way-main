import React from "react";
import {ProfilePagesType} from "../../../reducers/types";
import {addPostAC, updateNewTextPostAC} from "../../../reducers/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "../MyPosts/MyPosts";
import {AppRootStateType} from "../../../redux-store/redux-store";
import {Dispatch} from "redux";

type MyPostsType = {
    profilePages: ProfilePagesType
}


const MyPostsContainer: React.FC<MyPostsType> = () => {

    return (
        <div>
            <ConnectedMyPostsContainer/>
        </div>
    )
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = {
    profilePages: ProfilePagesType
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        profilePages: state.profilePage
    }
}

type mapDispatchToPropsType = {
    setNewPostCallback: (text: string ) => void
    addNewPostCallback: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        setNewPostCallback: (text: string ) => {
            dispatch( updateNewTextPostAC(text))
        },
        addNewPostCallback: () => {
            dispatch(addPostAC())
        }
    }
}

const ConnectedMyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;