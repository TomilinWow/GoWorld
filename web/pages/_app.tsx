import '../styles/global.css'
import '../styles/main.css'
import {Provider} from "react-redux";
import {store} from "../store/store";

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return <Provider store={store}>
        <Component {...pageProps} />
    </Provider>


}

export default MyApp
