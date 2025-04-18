import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./redux/store"
import MyHome from "./components/MyHome" // <-- usa questo!
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <Provider store={store}>
    <MyHome />
  </Provider>
)
