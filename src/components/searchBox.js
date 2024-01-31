import './searchbox.css'
import React from "react";
const SearchBox=(props)=>{
    return(
        <>
        <div className=" col-sm-3 d-flex justify-content-center">
            <input 
            className="form-control bg-dark search text-white"
            value={props.value}
            onChange={(event)=>props.setSearchValue(event.target.value)}
            placeholder="Type to Search..."></input>
            <select className='bg-dark text-white p-1' onChange={(event)=>props.setfilterValue(event.target.value)}>
                <option value=" ">Filter</option>
                <option value="series">Series</option>
                <option value="movie">Movie</option>
              </select>
        </div>
        </>
    );
}
export default SearchBox;