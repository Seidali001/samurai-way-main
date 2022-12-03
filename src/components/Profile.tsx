import world from "../world.jpg";
import React from "react";


const Profile = () => {
    return (
        <div className="content">
            <div>
                <img src={world}/>
            </div>
            <div>
                ava + discrip
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}
export default Profile;