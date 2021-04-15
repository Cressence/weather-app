import { mount } from 'enzyme';
import { Provider } from "react-redux";
import {store} from "./../store/configureStore";
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';

import  WeatherInfo from '../pages/WeatherInfo';

describe('<WeatherInfo />: Weather Info Screen', () => {
    
    it('renders correctly', () => {
        const history = createMemoryHistory();
        history.push(`${process.env.REACT_APP_API_URL}`);
            const component = mount(
                <Provider store={store} >
                    <Router history={history}>
                        <WeatherInfo />
                    </Router>
                </Provider>
            );
                      
        expect(component).toMatchSnapshot();
    });
});