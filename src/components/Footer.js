import React from "react";
import styled from "styled-components";


const StyledFooter = styled.footer`
  background-color: ${pr => pr.theme.white};
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const FooterP = styled.p`
    line-height: 0.4;
`



function Footer ({ copyright, hdurl}) {
    return <StyledFooter>
        <div>
            <FooterP>Image courtesy of {copyright}</FooterP>
            <FooterP>High resolution photo: <a href={hdurl} target="_blank" rel="noopener noreferrer" >Download</a></FooterP>
        </div>
    </StyledFooter>
}


export default Footer;