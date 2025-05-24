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
        
        </header>
    )
}

export default Header;