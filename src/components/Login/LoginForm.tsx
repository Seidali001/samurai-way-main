import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type FormValuesType = {
    login: string;
    password: string;
    rememberMe: boolean;
}

const LoginForm: React.FC<InjectedFormProps<FormValuesType>> = (props) => {

  //  const { handleSubmit} = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"login"} type="text" component={"input"} name={"login"}/></div>
            <div><Field placeholder={"password"} type="password" component={"input"} name={"password"}/></div>
            <div><Field type="checkbox" component={"input"} name={"rememberMe"}/>remember me</div>
            <div>
                <button type={"submit"}>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm<FormValuesType>({form: "login"})(LoginForm)
