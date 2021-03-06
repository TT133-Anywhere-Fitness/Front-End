import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { reducer } from './reducer/index'
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';

const store = createStore(reducer, applyMiddleware(logger, thunk));
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NavBar />
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
