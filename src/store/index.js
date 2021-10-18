import { createStore, applyMiddleware } from 'redux';
import { rootEpic, rootReducer } from './root';
import epicMiddleware from './epicMiddleware';

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);

export default store;
