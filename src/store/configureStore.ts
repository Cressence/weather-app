import { Store, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root/reducers/rootReducer';

export const store = configureStore();

function configureStore(): Store {
    // Build middleware
    const middleware = compose(applyMiddleware(thunk));

    //Create store
    const store = createStore(rootReducer, {}, middleware);

    return store;
}