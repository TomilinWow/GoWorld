import React, {useState} from "react";
import {login} from "../services/login_service";
import Link from "next/link";
// @ts-ignore
import goWorld from '../assets/images/goworld.png'


export type LoginInputs = {
    email: string
    password: string
}

function Page() {

    const initialValues: LoginInputs = {email: "", password: "",};

    const [inputs, setInputs] = useState(initialValues);
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await login(inputs);
        if (res) setError(res);
    };

    const handleInputChange = (e: React.ChangeEvent<any>) => {
        e.persist();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    };

    return <>
        <main className="flex items-center justify-center h-screen bg-slate-300">
            <form onSubmit={handleSubmit}>
                <div className=" rounded-3xl bg-slate-200  shadow-lg sahdow-slate-500/100 w-96  p-6">
                    <div className="flex items-center justify-center mb-4">
                        <img src={'../assets/images/goworld.png'} className="w-8 h-8"/>
                    </div>
                    <label className="text-gray-700">email</label>
                    <input
                           className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                           type="email" id="email" name="email" onChange={handleInputChange} value={inputs.email}/>
                    <label className="text-gray-700">Password</label>
                    <input
                           className="rounded-3xl h-8 w-full py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                           type="password" id="password" name="password" onChange={handleInputChange}
                           value={inputs.password}/>
                    <input className="rounded-3xl mb-6" id="remember" type="checkbox"/>
                    <label className="text-gray-700 hover:text-white-700" htmlFor="remember">Remember </label>
                    <button
                            className=" cursor-pointer  rounded-3xl bg-slate-500 w-full text-gray-100 py-2 rounded group-hover:bg-slate-500 transition-colors"
                            type="submit">Login
                    </button>
                    <div className="my-4">
                        <div className="my-4">
                            <Link href="/signup">
                                Create account?
                            </Link>
                        </div>
                    </div>
                </div>
                {error ? error : null}
            </form>
        </main>
    </>
}

export default Page;
