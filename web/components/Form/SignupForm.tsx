import React, {useState} from 'react';
import Link from "next/link";
import {signup} from "../../services/signup_service";



export type SignupFormInputs = {
    first_name: string
    last_name: string
    phone_number: string
    username: string
    email: string
    password: string
}

export const SignupForm = () => {


    const initialValues: SignupFormInputs = {
        first_name: '',
        last_name: '',
        phone_number: '',
        username: '',
        email: '',
        password: ''
    };

    const [inputs, setInputs] = useState(initialValues);
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await signup(inputs);
        if (res) setError(res);
    };

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <main className="flex items-center justify-center h-screen bg-slate-300">
            <form onSubmit={handleSubmit}>
                <div className="rounded-3xl bg-slate-200  shadow-lg sahdow-slate-500/100 w-96 p-6">
                    <div className="flex items-center justify-center mb-4">
                        <img className="w-8 h-8"/>
                    </div>
                    <label className="text-gray-700">First Name</label>
                    <input required
                        className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        id="first_name" name="first_name" onChange={handleInputChange} value={inputs.first_name}/>
                    <label className="text-gray-700">Last Name</label>
                    <input required
                        className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        id="last_name" name="last_name" onChange={handleInputChange} value={inputs.last_name}/>
                    <label className="text-gray-700">Username</label>
                    <input required
                        className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        id="username" name="username" onChange={handleInputChange} value={inputs.username}/>
                    <label className="text-gray-700">Phone number</label>
                    <input required
                        className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="tel"  placeholder="+7 (900) 123-45-67" pattern="(\+7|7|8)\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" id="phone_number" name="phone_number"
                           onChange={handleInputChange} value={inputs.phone_number}/>
                    <label className="text-gray-700">Email</label>
                    <input required
                        className="rounded-3xl h-8 w-full py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email}/>
                    <label className="text-gray-700">Password</label>
                    <input required
                        className="rounded-3xl h-8 w-full py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="password" id="password" name="password" onChange={handleInputChange} value={inputs.password}/>
                    <input className="rounded-3xl mb-6" id="remember" type="checkbox"/>
                    <label className="text-gray-700 hover:text-white-700" htmlFor="remember">Remember Me</label>
                    <button
                        className=" cursor-pointer  rounded-3xl bg-slate-500 w-full text-gray-100 py-2 rounded hover:bg-slate-700 transition-colors"
                        type="submit">Create
                    </button>
                    <div className="my-4">
                        <Link href="/login">
                            <a>Have account?</a>
                        </Link>
                    </div>
                </div>
                {error ? error : null}
            </form>
        </main>
    );
};
