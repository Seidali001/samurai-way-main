import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePagesType} from "../../reducers/types";
import MyPostsContainer from "./MyPostsContainer/MyPostsContainer";
import Preloader from "../common/Preloader/Preloader";


type ProfileType = {
    state: ProfilePagesType
}
const Profile: React.FC<ProfileType> = (props) => {
    /*if (!props.state.profile) {
        return <Preloader/>
    }*/
    return (
        <div>
            <ProfileInfo profile={props?.state?.profile}/>
            <MyPostsContainer profilePages={props?.state}/>
        </div>
    )

}
export default Profile;