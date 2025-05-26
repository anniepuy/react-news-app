/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: news_list_item.jsx
Purpose: using props to pass static file data from main.jsx to child component.
*/

const NewsItem = (props) => {
    return (
        <div className="news_item" key={props.item.id}>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
            </div>
        </div>
    )   
}

export default NewsItem;