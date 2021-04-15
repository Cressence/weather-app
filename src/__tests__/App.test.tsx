import React from 'react';
import { shallow } from 'enzyme';

import App from './../App';
import {store} from "./../store/configureStore";

test('renders the component', () => {
  const component = shallow(
  <App store={store} />
  );
  expect(component).toMatchSnapshot();
});