import React from "react";
import {ProfilePagesType} from "../../../reducers/types";
import {addPostAC} from "../../../reducers/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "../MyPosts/MyPosts";
import {AppRootStateType} from "../../../redux-store/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../hoc/withAuthRedirect";
import {UsersClassApiComponent} from "../../Users/UsersContainer";

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
        profilePages: state.profilePage,
    }
}

type mapDispatchToPropsType = {
    addNewPostCallback: (postText: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewPostCallback: (postText: string) => {
            dispatch(addPostAC(postText))
        }
    }
}


const ConnectedMyPostsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(MyPosts) as React.ComponentType; // Оборачиваем компонент в compose и указываем тип React.ComponentType


export default MyPostsContainer;