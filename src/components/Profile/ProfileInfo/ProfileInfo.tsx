import React from 'react';
import s from "./ProfileInfo.module.css";
import socialMedia from "../MyPosts/socialMedia.jpg";


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img alt={"image"} style={{width: "100%"}} src={socialMedia}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;