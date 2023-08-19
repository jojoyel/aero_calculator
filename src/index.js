import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import SlopeVZ from './calculations/SlopeVZ'
import SlopePercent from './calculations/SlopePercent'
import TODDist from './calculations/TODDist'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <SlopeVZ />
    <SlopePercent />
    <TODDist />
  </React.StrictMode>
)