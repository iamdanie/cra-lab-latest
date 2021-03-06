import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [thunk, sagaMiddleware, routeMiddleware];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = (window as any).devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
);
sagaMiddleware.run(rootSaga as any);
export { store, history };
