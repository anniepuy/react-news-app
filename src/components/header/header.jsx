/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: header.jsx
Purpose: Header component imported into main.jsx.
*/

import Nav from './nav.jsx';
import Navigation from './nav.jsx';
import { useState } from 'react';

const Header = () => {

    const [keywords, setKeywords] = useState('');


    const handleInputChange = (event) => {
        setKeywords(event.target.value);

    }
   
    return(
        <header>
            <div className = "logo">
                Custom News
            </div>
            <input 
                onChange={handleInputChange}
            />
            The keywords are : {keywords}
        <Navigation />
        </header>
    )
}

export default Header;