import express from "express";
import fs from "fs";
import path from "path";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";
import configureStore from '../src/store/configureStore'
import serverRenderer from './middleware/renderer'

const PORT = 8000;

const app = express();
const router = express.Router()

router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

// tell the app to use the above rules
// router.use('*', serverRenderer);
const store = configureStore();
router.use('^/$', serverRenderer(store));
app.use(router);

// start the app
app.listen(PORT, (error) => {
    if (error) {
        return console.log('something bad happened', error);
    }

    console.log("listening on " + PORT + "...");
}
)