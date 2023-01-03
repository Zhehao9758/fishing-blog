import App from './App'
import React from "react";
import ReactDom from 'react-dom/client'
import storeUtils from "./utils/storeUtils";
import memoryUtils from "./utils/memoryUtils";



/*
entry
 */


// load user
const user=storeUtils.getUser()
memoryUtils.user=user


// render
const root = ReactDom.createRoot(document.getElementById("root"))
root.render(<App />)