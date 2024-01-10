import React, {useEffect} from 'react';
import s from './Users.module.css'
import {UsersClassComponentPropsType} from "./UsersContainer";
import axios from "axios";
import UserAvatar from "../../assets/image/userAvatar.jpg"

const FirstUsersFuncComponent: React.FC<UsersClassComponentPropsType> = (props) => {

    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(res => {
                props.setUsersCallback(res.data.items)


            })
    }, []);

    return (
        <div className={s.usersMainBlock}>
            <h1 className={s.users}>Users</h1>
            <div>
                {props.users.map(us => {
                    return (
                        <div className={s.usersBlock} key={us.id}>
                            <span className={s.userAddBlock}>
                                <img className={s.avatarImg}
                                     src={us.photos.small != null? us.photos.small : UserAvatar}

                                     alt="avatar"/>
                                {us.followed ? <button className={s.follow}
                                                       onClick={() => props.setFollowOnFalse(us.id)}>follow</button> :
                                    <button className={s.unFollow}
                                            onClick={() => props.setFollowOnTrue(us.id)}>unfollow</button>}
                            </span>

                            <div className={s.userInfo}>
                                <div className={s.firstUserInfoBlock}>
                                    <span className={s.userName}>
                                        <h3>
                                            {us.name}
                                        </h3>
                                    </span>
                                    <span className={s.userStatus}>
                                         <span>
                                         {us.status}
                                         </span>
                                    </span>
                                </div>

                                <div className={s.secondUserInfoBlock}>
                                    <h4>
                                        {/*{us.location.country}*/} Ireland
                                    </h4>
                                    <h4>
                                        {/*{us.location.city}*/} Dublin
                                    </h4>
                                </div>

                            </div>

                        </div>)
                })}

                {/*<div className={s.userAddBlock}>
                    <img className={s.avatarImg}
                         src="https://p.kindpng.com/picc/s/21-211180_transparent-businessman-clipart-png-user-man-icon-png.png"
                         alt="avatar"/>

                    <button className={s.followUnfollow} >
                        follow
                    </button>
                </div>

                <div className={s.userInfo}>
                    <div className={s.firstUserInfoBlock}>
                        <div className={s.userName}>
                            <h3>
                                Alex
                            </h3>
                        </div>
                        <div className={s.userStatus}>
                        <span>
                        Lkvdndskrvnkvn vnskrb mk...
                        </span>
                        </div>
                    </div>

                    <div className={s.secondUserInfoBlock}>
                        <h4>
                            Ireland
                        </h4>
                        <h4>
                            Dublin
                        </h4>
                    </div>

                </div>*/}

            </div>
        </div>
    );
};

//export default FirstUsersFuncComponent;

/*{us.userAvatar}*/