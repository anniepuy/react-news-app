/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
Purpose: Practice React and Vite since I don't get to use this at work (*sigh*).
*/

import React from 'react'
import {createRoot} from 'react-dom/client'
import Header from './components/header/header.jsx'
import './styles/styles.css'

const App = () => (
    <>
        <Header />
    </>
)


createRoot(document.getElementById('root')).render(
    <App />
)