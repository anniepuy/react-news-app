/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
Purpose: Practice React and Vite since I don't get to use this at work (*sigh*).
*/

import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is a simple React app.</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)