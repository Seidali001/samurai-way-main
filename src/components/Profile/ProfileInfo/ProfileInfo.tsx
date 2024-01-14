import React from 'react';
import s from "./ProfileInfo.module.css";
import socialMedia from "../MyPosts/socialMedia.jpg";
import {ServerUserProfileType} from "../../../reducers/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";


type ProfileInfoType = {
    profile: ServerUserProfileType
}

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    return (
        <div>
            <div className={s.image}>
                <img alt={"image"} style={{width: "100%"}} src={socialMedia}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <h2>{props.profile.fullName}</h2>
                </div>
                <img alt="userAva" src={props?.profile?.photos?.large}/>
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;