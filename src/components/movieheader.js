import React from "react";
const MovieHeader=(props)=>{
    return(
        <>
        <div className="mx-3 col">
            <h1>{props.heading}</h1>
        </div>
        </>
    );
}
export default MovieHeader;