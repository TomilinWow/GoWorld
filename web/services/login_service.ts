import axios, { AxiosRequestConfig } from "axios";
import Cookie from "js-cookie";
import Router from "next/router";
import { LoginInputs } from "../pages/login";
import { catchAxiosError } from "./error";
import { post } from "./rest_service";

export const COOKIES = {
  authToken: "myApp.authToken"
};

export async function login(inputs: LoginInputs): Promise<string | void> {
  const data = new URLSearchParams(inputs);
  let res: any = await post("/api/user/login", data).catch(catchAxiosError);
  if (res.error) {
    return res.error;
  } else if (!res || !res.data.jwt) {
    return "Something went wrong!";
  }
  const { jwt } = res.data;

  // store the token into cookies
  Cookie.set(COOKIES.authToken, jwt);
  await Router.push("/home");
}
