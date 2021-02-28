import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useHistory  } from 'react-router-dom';
import imgGroup from '../../image/Group2.png';
import axios from "axios";
import './SignUp.css';

type InputsRegistrationType = {
    userName: string,
    login: string,
    password: string,
};


const SignUp = () => {
    const { register, handleSubmit, errors } = useForm<InputsRegistrationType>();
    let history = useHistory();

    let url = 'http://dev.trainee.dex-it.ru/api/Auth/SignUp';
    const onSubmit = (data: any) => {
        axios.post(url, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error));

        history.push('sign-in');
    };

    return(
        <div className="section-sign-in">
            <div className="container">
                <div className="wrapp-items d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12 col-md-4 content-left">
                            <h1 className="form-title">Sign up</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="form-sign-in">
                                <div><label htmlFor="name">Name</label></div>
                                <div>
                                    <input type="text"
                                           name="userName"
                                           id="name"
                                           ref={register({ required: true})}/>
                                    {errors.userName && <div><span className="form-wrong">Wrong name. Please, try again.</span></div>}
                                </div>
                                <div><label htmlFor="login">Login</label></div>
                                <div>
                                    <input type="text"
                                           name="login"
                                           id="login"
                                           ref={register({ required: true })}/>
                                    {errors.login && <div><span className="form-wrong">Wrong login. Please, try again.</span></div>}
                                </div>
                                <div><label htmlFor="password">Password</label></div>
                                <div>
                                    <input type="password"
                                           name="password"
                                           id="password"
                                           ref={register({ required: true })}/>
                                    {errors.password && <div><span className="form-wrong">Wrong password. Please, try again.</span></div>}
                                </div>
                                <div><label htmlFor="passwordTwo">Enter your password again</label></div>
                                <div>
                                    <input type="password"
                                           name="password"
                                           id="passwordTwo"
                                           ref={register({ required: true })}/>
                                    {errors.password && <div><span className="form-wrong">Wrong password. Please, try again.</span></div>}
                                </div>
                                <div className="form-checkbox">
                                    <input type="checkbox" id="checkbox" />
                                    <label htmlFor="checkbox">I accept the agreement</label>
                                </div>
                                <button type="submit" className="form-btn">Sign Up</button>
                            </form>
                            <p className="form-registration">
                                Not a member yet?
                                <Link to="/sign-in" className="form-color"> Sign in</Link>
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

export default SignUp;