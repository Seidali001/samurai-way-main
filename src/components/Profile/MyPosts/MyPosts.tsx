import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostsPropsType} from "../MyPostsContainer/MyPostsContainer";
import {DialogReduxForm, FormValuesForMyPostType} from "./MyPostForm/MyPostForm";



const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onSubmitHandler = (values: FormValuesForMyPostType) => {
        props.addNewPostCallback(values.postText)
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My post:</h3>
                <div>


                </div>
                <DialogReduxForm onSubmit={onSubmitHandler}/>
                <div className={s.postBlock}>
                    {props.profilePages.posts.map((p, i) => <Post key={i} id={p.id} text={p.text}
                                                                  likesCount={p.likesCount}/>)}
                </div>

            </div>
        </div>
    )
}


export default MyPosts;