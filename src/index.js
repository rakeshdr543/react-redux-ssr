// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore( window.REDUX_STATE || {} );

const AppBundle = (
    <Provider store={store}>
        <App />
    </Provider>
);

window.onload = () => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
