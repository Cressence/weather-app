import { mount } from 'enzyme';
import { Provider } from "react-redux";
import {store} from "./../store/configureStore";

import  Loading from '../pages/Loading/Loading';

describe('<Loading />: Loading Screen', () => {
    
    it('shows loader while data is loading', () => {
            const component = mount(
                <Provider store={store} >
                    <Loading />
                </Provider>
            );
                
        expect(component).toMatchSnapshot();
    });
});