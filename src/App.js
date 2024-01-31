import './App.css';
import MovieHeader from './components/movieheader';
import { useEffect, useState } from 'react';
import SearchBox from './components/searchBox';
import MovieCards from './components/movieCards';


function App() {
  let[search, searchValue]=useState("naruto");
  let[filter, filterValue]=useState(" ");
  let[movies,updateMovies]=useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  async function getMovies()
  {
    setLoading(true);
    try
    {
    const url=`http://www.omdbapi.com/?s=${search}&apikey=5bfa8728&type=${filter}`;
      let respose= await fetch(url);
      if(!respose.ok)
      {
        throw new Error("Sorry! Network is interrupted");
      }
      let list= await respose.json();
      if(list.Search)
      {
        updateMovies(list.Search)
      }
    }
    
    catch(error)
    {
      setError(error);
    }
    
    finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
      getMovies();
  },[search,filter])


  if(loading)
  {
    return(
      <>
      <div className='container-fluid movie-app p-1 text-white bg-dark'>
          <div className='row justify-content-between my-5 '>
              <MovieHeader heading= "Streamify"/>
              <SearchBox searchValue={search}  setSearchValue={searchValue} setfilterValue={filterValue} />
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center my-5'>
          <div className="loader"></div>
          <h2 className="mt-2">Fetching Movies....</h2>
          </div>

      </div>
    </>
    );
  }

if(error)
{
  return (
    <>
      <div className='container-fluid movie-app p-1 text-white bg-dark'>
          <div className='row d-flex align-items-center my-5 '>
              <MovieHeader heading= "Streamify"/>
              <SearchBox searchValue={search}  setSearchValue={searchValue} setfilterValue={filterValue} />
          </div>
          <div className='row g-0 justify-content-start mt-5'>
           <h2>ERROR: </h2>
           <h3>{error.message}</h3>
          </div>
      </div>
    </>
      );
}

return (
  <>
    <div className='container-fluid movie-app p-1 text-white bg-dark'>
        <div className='row d-flex align-items-center my-5 '>
            <MovieHeader heading= "Streamify"/>
            <SearchBox searchValue={search}  setSearchValue={searchValue} setfilterValue={filterValue} />
        </div>
        <div className='row g-0 justify-content-start mt-5'>
         {
          movies.map((mov)=><MovieCards {...mov} key={mov.imdbID}/>)
         }
        </div>
    </div>
  </>
    );

}

export default App;
// return (
//   <>
//     <div className='container-fluid movie-app p-1 text-white bg-dark'>
//         <div className='row d-flex align-items-center my-5 '>
//             <MovieHeader heading= "Streamify"/>
//             <SearchBox searchValue={search}  setSearchValue={searchValue} setfilterValue={filterValue} />
//         </div>
        
//         <div className='row g-0 justify-content-start mt-5'>
//          {
//           movies.map((mov)=><MovieCards {...mov} key={mov.imdbID}/>)
//          }
//         </div>
//     </div>
//   </>
//     );