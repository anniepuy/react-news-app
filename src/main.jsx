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
import { newsData } from './utils/data.js'
import { useState } from 'react'
import NewsList from './components/news_list.jsx'

//import StatePlayground from './components/playground/state.jsx'

const App = () => {

    let [news, setNews] = useState(newsData);

    console.log(newsData);
    return(
            <>
                <Header />
                <div className="container">
                    <NewsList news = {news}/>
                </div>

            </>
    )
}


createRoot(document.getElementById('root')).render(
    <App />
)