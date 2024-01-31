import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagesType} from "../../reducers/types";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {updateUserProfileStatusTC} from "../../reducers/profile-reducer";


type ProfileType = {
    state: ProfilePagesType
    status: string
    updateUserProfileStatusTC: (status: string) => void
}
const Profile: React.FC<ProfileType> = (props) => {

    return (
        <div>
            <ProfileInfo profile={props?.state?.profile} status={props.status} updateUserProfileStatusTC={props.updateUserProfileStatusTC}/>
            <MyPostsContainer profilePages={props?.state}/>
        </div>
    )

}
export default Profile;