import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import App from "./components/App";
import { Provider } from 'react-redux'
import store from "./redux-store/redux-store";

// export type StatePropsType = EmptyObject & {
//     profilePage: ProfilePagesType
//     dialogPages: DialogPagesType
// }

ReactDOM.render(
<Provider store={store}>
        <BrowserRouter>
            <App/>
         </BrowserRouter>
</Provider>
,
        document.getElementById('root')
    );






/*
import './index.css';
import state from "./components/State/state";
import {renderTree} from "./renderTree";



renderTree(state);
*/