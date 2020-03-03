import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store,
}