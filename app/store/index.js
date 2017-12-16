// @flow
import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "./../sagas/index";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
      )
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
