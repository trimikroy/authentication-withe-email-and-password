import React, { useState } from 'react';
import auth from '../../firebase.init';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';



const Register = () => {

    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [showPassword, setShowPassword] = useState(false);


    const handleRegisterForm = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;

        console.log(terms, email, password)

        // set error reset
        setErrorMessage('');
        setSuccess(false);

        if(!terms){
            setErrorMessage('Please Accepts Term and Conditions');
            return;
        }


        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!regex.test(password)) {
            setErrorMessage("one latter, one number, and 8 character must type ");
            return;
        }


        // if(password.length < 6){
        //     setErrorMessage('Password should be 6 character must be type!');
        //     return;
        // }



        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)

                // Send a user a verification email
                sendEmailVerification(auth.currentUser)
                .then(() => {
                    console.log('verification email address')
                })


            })
            .catch(error => {
                console.log(error.message)
                setErrorMessage(error.message)
                setSuccess(false);
            })
    }


    return (
        <div>
            <div className='bg-gray-100 rounded-lg w-2/6 
            mx-auto h-[330px] mt-20  shadow-2xl '>
                <h2 className='text-3xl font-bold text-center'>Register Form</h2>
                <form onSubmit={handleRegisterForm}>
                    <div className='card-body'>
                        <fieldset className="fieldset relative">

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input w-full"
                                placeholder="Password must 6 characters type" />
                            <span
                                onClick={() => {
                                    setShowPassword(!showPassword)
                                }}
                                className=' absolute right-3 top-27 '>
                                {

                                    showPassword ?
                                        <IoIosEye className='text-2xl cursor-pointer'></IoIosEye>
                                        : <IoIosEyeOff className='text-2xl cursor-pointer'></IoIosEyeOff>
                                }
                            </span>
                            <label className="label mt-2">
                                <input type="checkbox" name='terms'  className="checkbox" />
                                Accept Our Terms and Condition.
                            </label>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='text-lg font-semibold'>You have Already Account! <Link className='text-green-400' to='/signIn'>LogIn</Link></p>
                        </fieldset>
                      
                    </div>
                   
                </form>

                {
                    errorMessage && <p className='text-sm text-red-600 pl-6'>{errorMessage}</p>
                }
                {
                    success && <p className='text-green-600 pl-6'>SignUp is Successful</p>
                }

            </div>
        </div>
    );
};

export default Register;