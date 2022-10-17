import React from "react"
import {AuthProps, privateRoute} from "../components/private_route";
import Cookie from "js-cookie";
import Router from "next/router";
import {COOKIES} from "../services/login_service";
import {get} from "../services/rest_service";
import Link from "next/link";

type Props = AuthProps & {
    message: string
}

function Page(props: Props) {
    const logout = async () => {
        Cookie.remove(COOKIES.authToken);
        await Router.push("/login");
    };


    return <div className='flex flex-col items-center justify-center h-screen text-4xl font-bold'>
            Go World
            <Link href="/signup">
                <a className='text-teal-600'>signup</a>
            </Link>
            <Link href="/login" >
                <a className='text-teal-600'>login</a>
            </Link>
            <button onClick={() => logout()}>logout</button>
    </div>

}

Page.getInitialProps = async ({auth}: AuthProps): Promise<Props> => {
    const res: any = await get("/api/restricted", {
        headers: {
            Authorization: auth.authorizationString
        }
    });

    let message = "Something unexpected happened!";

    if (res.error) {
        message = res.error;
    } else if (res.data && res.data.message) {
        message = res.data.message
    }

    return {message, auth,};
};

export default privateRoute(Page);
