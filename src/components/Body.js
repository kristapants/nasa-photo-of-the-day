//App will pass down data url, hdurl, copyright (for alt text), explanation
//will display the photo with the explanation as a caption, the photo will a href to _blank hdurl copy and alt text copyright
import React from "react";
import styled from "styled-components";


const BodyContainer = styled.section`
  background-color: ${pr => pr.theme.white};
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items:center;
`
const APODContainer = styled.article`
    width: 55%;
    padding: 30px 3%;
`
const APODExplainer = styled.article`
    width: 35%;
`
const APOD = styled.img`
    max-width: 100%;
`

function Body( {photoURL, title, description, hdurl, copyright} ) {
    
    
    
    return (
        <div>
            <BodyContainer>
                <APODContainer>
                    <APOD src={photoURL} alt={copyright}  />
                </APODContainer>    
                <APODExplainer>
                    <h4>NASA Photo of the Day</h4>
                    <p>{description}</p>
                </APODExplainer>
            </BodyContainer>
        </div>
    )
}


export default Body;