import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormValuesForMyPostType = {
    postText: string
}
const MyPostForm: React.FC<InjectedFormProps<FormValuesForMyPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="postText" component="textarea" type="text" placeholder="your post"/>
                <button>add post</button>
            </div>
        </form>
    );
};

export const DialogReduxForm = reduxForm<FormValuesForMyPostType>({form: "MyPostTextMessage"})(MyPostForm)
