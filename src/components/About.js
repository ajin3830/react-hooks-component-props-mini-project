import React from "react";

// here I'm destructuring the props, so instead of passing props as
// parameter of the function, I'm passing image and about
// the image has a default value set to this URL

function About({image = "https://via.placeholder.com/215" , about}) {
    // console.log(image, about);
    return (
        <aside>
            {/* write attributes inside an image tag, NOT in between */}
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
};


export default About;