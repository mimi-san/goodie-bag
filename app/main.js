import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './store'
import Root from './components/root'
console.log(Root)
ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('main')
)
