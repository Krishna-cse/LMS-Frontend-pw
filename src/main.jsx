import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux'

import App from './App.jsx'
import store from './Redux/Store'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
  </Provider>
    
 // </React.StrictMode>,
)
