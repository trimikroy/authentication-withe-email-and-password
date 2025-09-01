import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';
const SignUp = () => {


    const handleSignInSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result)
        })
        .catch(error=> {
            console.log(error)
        })

    }

    


    return (

        <div className='flex flex-col h-full justify-center items-center mt-12'>
            <h2 className='text-2xl font-semibold text-start'>SignUp Form</h2>
            <form onSubmit={handleSignInSubmit} >
                <div className=" bg-base-100 shrink-0 shadow-2xl">
                    <div className="card-body w-[400px]">
                        <fieldset className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />

                            <button className="btn btn-neutral mt-4">SignUp</button>


                        </fieldset>
                    </div>
                </div>
            </form>
        </div>

    );
};

export default SignUp;