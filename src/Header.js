//Pass down from APP data title props
//display a static h1
import React from "react";



function Header({ title }) {
    return <header>
        <h1>NASA Explorations</h1>
        {
            title && <h2>{title}</h2>
        }
    </header>
}


export default Header;