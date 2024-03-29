import ServerCookie from "next-cookies";
import Router from "next/router";
import React, { Component } from "react";
import { COOKIES } from "../services/login_service";
import { AuthToken } from "../services/auth_token";

export type AuthProps = {
  auth: AuthToken
}

export function PrivateRoute(WrappedComponent: any) {
  return class extends Component<AuthProps> {
    static async getInitialProps(ctx: any) {
      const token = ServerCookie(ctx)[COOKIES.authToken];
      const auth = new AuthToken(token);
      const initialProps = { auth };
      if (auth.isExpired) {
        ctx.res.writeHead(302, {
          Location: "/login?redirected=true",
        });
        ctx.res.end();
      }
      if (WrappedComponent.getInitialProps) return WrappedComponent.getInitialProps(initialProps);
      return initialProps;
    }

    get auth() {
      return new AuthToken(this.props.auth.token);
    }

    render() {
      // @ts-ignore
      return <WrappedComponent auth={this.auth} {...this.props} />;
    }
  };
}
