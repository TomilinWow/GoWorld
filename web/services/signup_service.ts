import {LoginInputs} from "../pages/login";
import {post} from "./rest_service";
import {catchAxiosError} from "./error";
import Cookie from "js-cookie";
import Router from "next/router";
import {SignupFormInputs} from "../components/Form/SignupForm";


export const COOKIES = {
    authToken: "myApp.authToken"
};

export async function signup(inputs: SignupFormInputs): Promise<string | void> {
    const data = new URLSearchParams(inputs);


    const res: any = await post("/api/user/register", data).catch(catchAxiosError);
    if (res.error) {
        return res.error;
    } else if (!res.data) {
        return "Something went wrong!";
    }


    // store the token into cookies
    // Cookie.set(COOKIES.authToken, token);
    await Router.push("/login");
}
