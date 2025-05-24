/* 
Project: React news app
Author: Ann Hagan
Date: 2025-05-24
File: header.jsx
Purpose: Header component imported into main.jsx.
*/



const Header = () => {

    const handleInputChange = () => {
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
        </header>
    )
}

export default Header;