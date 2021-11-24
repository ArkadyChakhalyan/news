import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'
import './index.scss';
import { App } from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);