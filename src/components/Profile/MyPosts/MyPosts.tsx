import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfilePagesType} from "../../../reducers/types";
import {MyPostsPropsType} from "../MyPostsContainer/MyPostsContainer";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const setNewPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newPost = e.currentTarget.value
        props.setNewPostCallback(newPost)
    }

    const addNewPost = () => {
        props.addNewPostCallback()
    }


    return (
        <div className={s.postBlock}>
            <div>
                <h3>My post:</h3>
                <div>
                    <textarea value={props.profilePages.newText} onChange={setNewPost}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>add post</button>
                </div>
                <div className={s.postBlock}>
                    {props.profilePages.posts.map((p, i) => <Post key={i} id={p.id} text={p.text} likesCount={p.likesCount}/>)}
                </div>

            </div>
        </div>
    )
}
export default MyPosts;