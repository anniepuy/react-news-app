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

    const getKeywords = (event) => {
        const keywords = event.target.value.toLowerCase();
        const filtered = newsData.filter((item) => {
            return (
                item.title.toLowerCase().includes(keywords) ||
                item.feed.toLowerCase().includes(keywords)
            );
        });
        setNews(filtered);
    }

    console.log(newsData);
    return(
            <>
                <Header  getKeywords={getKeywords}/>
                <div className="container">
                    <NewsList news = {news}/>
                </div>

            </>
    )
}


createRoot(document.getElementById('root')).render(
    <App />
)