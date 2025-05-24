/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: header.jsx
Purpose: Header component imported into main.jsx.
*/

import Nav from './nav.jsx';
import Navigation from './nav.jsx';

const Header = () => {

    const handleInputChange = (event) => {
        console.log(event);

    }
   
    return(
        <header>
            <div className = "logo">
                Custom News
            </div>
            <input 
                onChange={handleInputChange}
            />
        <Navigation />
        </header>
    )
}

export default Header;