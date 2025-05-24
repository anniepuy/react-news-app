/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: nav.jsx
Purpose: Resuable smaller component just for the nav bar.
*/

const Nav = () => (
    <nav className="mainNav">
            <ul>
                <li className="navItem">
                    <a href="#">Home</a>
                </li>
                <li className="navItem">
                    <a href="#">World</a>
                </li>
                <li className="navItem">
                    <a href="#">Politics</a>
                </li>
                <li className="navItem">
                    <a href="#">Business</a>
                </li>
                <li className="navItem">
                    <a href="#">Technology</a>
                </li>
            </ul>
        </nav>
)

export default Nav;