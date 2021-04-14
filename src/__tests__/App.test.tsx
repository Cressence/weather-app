import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./../App";
import {store} from "./../store/configureStore";

const Wrapper = () => {return <Provider store={store}></Provider>};

describe("renders the app component without failure", () => {
    
    it('<App /> with store', () => {
       render( <App store={store} />, {wrapper: Wrapper});
    });
  
});
