import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagesType} from "../../reducers/types";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";


type ProfileType = {
    state: ProfilePagesType
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer profilePages={props.state}/>
        </div>
    )
}
export default Profile;