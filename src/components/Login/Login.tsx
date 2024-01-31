import React from 'react';
import s from './Login.module.css'
import {FormValuesType, LoginReduxForm} from "./LoginForm";




const Login = () => {
    const onSubmitHandler = (formData: FormValuesType) => {
console.log(formData)
    }

    return (
        <div className={s.loginBlock}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

export default Login


