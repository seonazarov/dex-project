import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import imgGroup from '../../image/Group.png';
import { useSelector, useDispatch } from 'react-redux';
import {selectCurrentUser, selectIsAuth} from '../../store/signInSlice';
import { signInToken } from '../../store/signInSlice';
import './SignIn.css';


type InputsType = {
    login: string,
    password: string,
};

const SignIn = () => {
    const { register, handleSubmit, errors } = useForm<InputsType>();
    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);
    let isAuth = useSelector(selectIsAuth);

    let url = 'http://dev.trainee.dex-it.ru/api/Auth/SignIn';
    const onSubmit = (data: object) => {

        fetch(url, {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(response => {

                if (!response.token) {
                    //Тут прописываем логику
                } else {
                    localStorage.setItem('token', response.token);
                    // dispatch(signInToken(response));
                    // dispatch(user(response));
                    // dispatch(isAuth(true));
                }
            });
    };


    return(
        <div className="section-sign-in">
            <div className="container">
                <div className="wrapp-items d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 col-md-4 content-left">
                            <h1 className="form-title">Sign in</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-sign-in">
                                <div><label htmlFor="login">Login</label></div>
                                <div>
                                    <input type="text" name="login"
                                            ref={register({ required: true, minLength: 2 })}
                                            id="login" />
                                    {errors.login && <div><span className="form-wrong">Wrong login. Please, try again.</span></div>}
                                </div>
                                <div><label htmlFor="password">Password</label></div>
                                <div>
                                    <input type="password" name="password"
                                           ref={register({ required: true, minLength: 6 })}
                                           id="password" />
                                    {errors.password && <div><span className="form-wrong">Wrong password. Please, try again.</span></div>}
                                </div>
                                <button type="submit" className="form-btn">Sign in</button>
                            </form>
                            <p className="form-registration">
                                Not a member yet?
                                <Link to="/sign-up" className="form-color"> Sign up</Link>
                            </p>
                        </div>
                        <div className="d-none d-md-block col-md-8" id="right-fluid">
                            <div className="content-inner">
                                <img src={imgGroup} className="content-right-img" alt="Group" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;