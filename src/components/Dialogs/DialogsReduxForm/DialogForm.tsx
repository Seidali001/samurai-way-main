import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";



export type FormValuesForDialogType = {
    newTextMessage: string
}

const DialogForm: React.FC<InjectedFormProps<FormValuesForDialogType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field type="text" name="newTextMessage" component="textarea"
                           placeholder={"send something"}/>
                </div>

                <button type={"submit"}>send</button>
            </div>
        </form>
    );
};

export const DialogReduxForm = reduxForm<FormValuesForDialogType>({form: "DialogTextMessage"})(DialogForm)
