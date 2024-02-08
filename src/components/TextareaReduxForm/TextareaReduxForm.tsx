import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormValuesType = {
    textMessage: string
}

const TextareaReduxForm: React.FC<InjectedFormProps<FormValuesType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name="textMessage"
                           component="textarea"
                           type="text"
                           placeholder={"send something"}
                    />
                </div>
                <button type={"submit"}>send message</button>
            </div>
        </form>
    );
};

export const UniversalReduxForm = reduxForm<FormValuesType>({form: "FormTextMessage"})(TextareaReduxForm)
