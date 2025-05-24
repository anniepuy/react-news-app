/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: nav.jsx
Purpose: Resuable smaller component just for the nav bar using map to loop through the array list.
*/

const Nav = () => {

    const navItems = [
        { id: "1", link:'/home', title: 'Home' },
        { id: "2", link:'/articles', title: 'Articles' },
        { id: "3", link:'/sports', title: 'Sports' },
        { id: "4", link:'/music', title: 'Music' },
        { id: "5", link:'/art', title: 'Art' },
    ]
   
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