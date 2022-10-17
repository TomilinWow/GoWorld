import React from "react";
import { get } from "../services/rest_service";
import Login from "./login";

type Props = {
  message: string;
}

function Page({message}: Props) {
  return <>
    <Login/>
  </>;
}

Page.getInitialProps = async () => {
  const res: any = await get("/api/unrestricted");

  let message = "Something unexpected happened!";

  if (res.error) {
    message = res.error;
  } else if (res.data && res.data.message) {
    message = res.data.message
  }

  return { message };
};

export default Page;
