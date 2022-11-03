import React from "react"
import {AuthProps, PrivateRoute} from "../components/PrivateRoute";
import {get} from "../services/rest_service";
import {Layout} from "../components/Layout/Layout";
import Dashboard from "../components/Pages/Dashboard";

type Props = AuthProps & {
    message: string
}

function Page(props: Props) {

    return <Layout>
        <Dashboard/>
    </Layout>

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

export default PrivateRoute(Page);
