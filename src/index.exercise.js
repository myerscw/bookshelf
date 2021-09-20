import {loadDevTools} from './dev-tools/load'
import './bootstrap'
import * as React from 'react'
import ReactDOM from 'react-dom'
import {QueryClientProvider} from 'react-query'
import {App} from './app'
import {queryClient} from './utils/queryClient'

loadDevTools(() => {
  ReactDOM.render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
    document.getElementById('root'),
  )
})
