import React from "react"
import {AuthProps, PrivateRoute} from "../components/PrivateRoute";
import {get} from "../services/rest_service";
import {Layout} from "../components/Layout/Layout";
import Operations from "../components/Pages/Operations";

type Props = AuthProps & {
    message: string
}

function Page(props: Props) {

    return <Layout>
        <Operations/>
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
