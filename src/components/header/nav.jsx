/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: nav.jsx
Purpose: Resuable smaller component just for the nav bar using map to loop through the array list.
*/

import { navItems } from "../../utils/data";    

const Nav = () => {

   return( 
    <nav className="mainNav">
            <ul>
                {navItems.map((item) => (
                    <li className="navItem" key={item.id}>
                    <a href="{item.link}">{item.title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;