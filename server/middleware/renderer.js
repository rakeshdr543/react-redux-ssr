import React from 'react'
import ReactDOMServer from 'react-dom/server'

// import our main App component
import App from '../../src/App';
import configureStore from '../../src/store/configureStore';
import {Provider} from 'react-redux'

// import the manifest generated with the create-react-app build
import manifest from '../../build/asset-manifest.json';
// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

const path = require("path");
const fs = require("fs");

const store = configureStore();

export default (store) => (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }

        // render the app as a string
        // const html = ReactDOMServer.renderToString(<App />);
        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        );

        const reduxState = JSON.stringify(store.getState());

        // inject the rendered app into our html and send it
        return res.send(
            htmlData.replace(
                '<div id="root"></div>',
                `<div id="root">${html}</div>`
            )
                .replace('"__SERVER_REDUX_STATE__"', reduxState)
        );
    });
}