import { Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root/reducers/rootReducer';

export const store = configureStore();

function configureStore(): Store {
    const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    // Build middleware
    const middleware = composeEnhancers(applyMiddleware(thunk));

    //Create store
    const store = createStore(rootReducer, {}, middleware);

    return store;
}