import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

interface AllProps {
  store: Store;
}

const App = (props: AllProps) => {
  const { store }  = props;

  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
