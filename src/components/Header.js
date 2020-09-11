//Pass down from APP data title props
//display a static h1
import React from "react";
import styled from "styled-components";


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`


function Header({ title }) {
    return <StyledHeader>
        <h1>NASA Explorations</h1>
        {
            title && <h2>{title}</h2>
        }
    </StyledHeader>
}


export default Header;