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

const Header = (props) => {
    const [active, setActive] = useState('active')

    const handleInputChange = (event) => {
        const value = event.target.value === '' ? 'active':'not-active';
        setActive(value)
    }
   
    return(
        <header>
            <div className = "logo">
                Custom News
            </div>
            <input className = {active ? 'active' : 'not-active'}
                onChange={props.getKeywords}
            />
           
            <Navigation />
        </header>
    )
}

export default Header;