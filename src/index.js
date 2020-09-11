import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import App from "./components/App";

ReactDOM.render(
    <ThemeProvider theme={theme}><App /></ThemeProvider>,
    document.querySelector('#root')
  )