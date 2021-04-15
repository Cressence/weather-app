import { Store } from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';

interface AllProps {
  store: Store;
}

const App = (props: AllProps) => {
  const { store }  = props;

  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
