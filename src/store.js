import { createStore } from 'redux';
import { reducer } from './reducer';

const persistedState = localStorage.getItem('news')
    ? JSON.parse(localStorage.getItem('news'))
    : undefined;

export const store = createStore(reducer, persistedState);

store.subscribe(() => {
    localStorage.setItem('news', JSON.stringify(store.getState()))
});