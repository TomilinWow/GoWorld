import React from 'react';
import Link from "next/link";

export const SignupForm = () => {

    const onFinish = (e: any) => {
        e.preventDefault()

    }

    return (
        <main className="flex items-center justify-center h-screen bg-slate-300">
            <form>
                <div className="rounded-3xl bg-slate-200  shadow-lg sahdow-slate-500/100 w-96 p-6">
                    <div className="flex items-center justify-center mb-4">
                        <img className="w-8 h-8"/>
                    </div>
                    <label className="text-gray-700">Name</label>
                    <input
                        className="rounded-3xl h-8 w-full sm:w-8 py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="name"/>
                    <label className="text-gray-700">Email</label>
                    <input
                        className="rounded-3xl h-8 w-full py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="email"/>
                    <label className="text-gray-700">Password</label>
                    <input
                        className="rounded-3xl h-8 w-full py2 bg-gray-50 rounded hover:bg-gray-100 transition-colors text-gray-500 px-1 outline-none mb-4"
                        type="password"/>
                    <input className="rounded-3xl mb-6" id="remember" type="checkbox"/>
                    <label className="text-gray-700 hover:text-white-700" htmlFor="remember">Remember Me</label>
                    <button onClick={(e) => onFinish(e)}
                        className=" cursor-pointer  rounded-3xl bg-slate-500 w-full text-gray-100 py-2 rounded hover:bg-slate-700 transition-colors"
                        type="submit">Create
                    </button>
                    <div className="my-4">
                        <Link href="/login">
                            <a>Have account?</a>
                        </Link>
                    </div>
                </div>
            </form>
        </main>
    );
};
