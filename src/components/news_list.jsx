/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: news_list.jsx
Purpose: using props to pass static file data from main.jsx to child component.
*/
import NewsItem from './news_list_item.jsx';

const NewsList = (props) => {
    
    const news = props.news.map(item => (
        <NewsItem item = {item} key={item.id} />
    ));

    return (
        <>
            {news}
        </>
    )
}

export default NewsList;