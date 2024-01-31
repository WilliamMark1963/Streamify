import './movieCards.css';
import React from "react";
let MovieCards=({Title,Type,Year,Poster})=>{
    return(
        <>
        <div className=" col-lg-3 col-md-2 col-sm-1 p-3" >
            <div className="card" style={{width:20+"rem", height:38+"rem"}}>
                <img src={Poster} className="img-fluid" style={{height:25+"rem"}}></img>
                <div className="card-title">
                <h3>{Title}</h3>
                </div>

                <div className='d-flex justify-content-between p-3'>
                <p>Type: <i>{Type}</i></p>
                <p>Year: <i>{Year}</i></p>
                </div>
            </div>
        </div>
        </>
    );
}
export default MovieCards