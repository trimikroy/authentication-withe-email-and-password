import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [success, setSuccess] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        // reset user
        setSuccess(false);
        setLoginError('');

        
        // Login User
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
           

            if(!result.user.emailVerified){
                setLoginError('Please verified your email address')
            }
            else{
                setSuccess(!success);
            }

        })
        .catch(error => {
            console.log(error.message)
            setLoginError(error.message)
        })
    }

    //reset password handleForgetPassword
    const handleForgetPassword = () => {
        console.log(emailRef.current.value)
        const email = emailRef.current.value;
        if(!email){
           
            alert('Please provide your valid email address')
        }else{
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Reset Email Send! Please check your email')
                })
            
        }
    }

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <form onSubmit={handleLogin}>
                <fieldset className="fieldset bg-base-200 shadow-xl    rounded-box w-xl border p-4">
                    <legend className="fieldset-legend text-2xl">Login</legend>

                    <label className="label">Email</label>
                    <input type="email" ref={emailRef} name='email' className="input w-full  " placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input w-full " placeholder="Password" />
                    <div ><a onClick={handleForgetPassword}  className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>

                    <p className='text-lg font-semibold '>Create a new User Account! <Link className='text-indigo-700' to= "/register">SignUp</Link></p>
                </fieldset>
                {
                    success && <p className='text-green-600'>LogIn Successful</p>
                }
                {
                    loginError && <p className='text-red-500'>{loginError}</p>
                }
            </form>
           
        </div>
    );
};

export default SignIn;