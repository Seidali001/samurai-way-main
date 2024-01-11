import React from 'react';
import s from "./Users.module.css";
import UserAvatar from "../../assets/image/userAvatar.jpg";
import {UsersFromServerType} from "../../reducers/users-reducer";
import Preloader from "../common/Preloader/Preloader";


type UsersType = {

    isFetching: boolean
    users: UsersFromServerType[]
    totalUserCount: number
    pageCount: number
    currentPage: number
    setCurrentPageHandler: (p: number) => void
    setFollowOnFalse: (id: number) => void
    setFollowOnTrue: (id: number) => void
}

const Users: React.FC<UsersType> = (props) => {

    if (props.users === null) {
        return <p>Loading...</p>; // или любая другая заглушка
    }

    let pagesCount = Math.ceil(props.totalUserCount / props.pageCount)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>

            <div className={s.usersMainBlock}>
                <h1 className={s.users}>Users</h1>
                <div className={s.pages}>
                    {pages.map((p) => {
                        return <span className={props.currentPage === p ? s.selectedPage : ""}
                                     onClick={() => props.setCurrentPageHandler(p)}
                        >
                            {p}
                        </span>
                    })}
                </div>
                <div>
                    {props.isFetching ?
                        <Preloader/>
                        :
                        props.users.map(us => {
                            return (
                                <div className={s.usersBlock} key={us.id}>
                                <span className={s.userAddBlock}>
                                    <img className={s.avatarImg}
                                         src={us.photos.small != null ? us.photos.small : UserAvatar}
                                         alt="avatar"
                                    />
                                    {us.followed ? <button className={s.follow}
                                                           onClick={() => props.setFollowOnFalse(us.id)}>
                                            follow
                                        </button> :
                                        <button className={s.unFollow}
                                                onClick={() => props.setFollowOnTrue(us.id)}>
                                            unfollow
                                        </button>
                                    }
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
                                </div>
                            )
                        })}

                </div>

            </div>
        </div>
    );
};

export default Users;