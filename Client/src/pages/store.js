import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        component: componentReducer,

    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware().concat(sagaMiddleware)
    }
})
function* rootSaga() {
    yield all([
        // Add sagas here
    ]);
}

sagaMiddleware.run(rootSaga);
