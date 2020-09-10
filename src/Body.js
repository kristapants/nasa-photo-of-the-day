//App will pass down data url, hdurl, copyright (for alt text), explanation
//will display the photo with the explanation as a caption, the photo will a href to _blank hdurl copy and alt text copyright
import React from "react";



function Body( {photoURL, title, description, hdurl, copyright} ) {
    
    
    
    return (
        <div>
            <section className="photo-info">
                <img src={photoURL} alt={copyright}  />
                <article>
                    <h1 className="title">{title}</h1>
                    <h4>NASA Photo of the Day</h4>
                    <p>{description}</p>
                </article>
            </section>
        </div>
    )
}


export default Body;