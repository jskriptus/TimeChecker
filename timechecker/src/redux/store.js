import { createStore } from 'redux';
import { timer, initialState } from './reducers/timer';

const store = createStore(
    timer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
