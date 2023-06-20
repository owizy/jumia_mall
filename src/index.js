import React from "react"
import ReactDOM from "react-dom/client"
import App from './App'
import Context from "./Context"
import "./components/index.css"
// CREATE ROOT & WRAP IT IN CONTEXT
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context>
    <App/>
</Context>)
