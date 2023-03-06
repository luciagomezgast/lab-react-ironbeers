import { useEffect, useState } from "react";
import axios from 'axios';


function FilterBeer() {

    const [formFilter, setFormFilter] = useState("")


    const filterHandler = (e)=>{
        setFormFilter(e.target.value)   
        e.preventDefault(); 
    }

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${formFilter}`)
        .then(result=>{
            console.log('result filter', result.data)
        })
        .catch(err=>console.log(err))
    })

    const submitHandler = (e)=>{
        e.preventDefault();
        setFormFilter("")


    }

/*     const filterBeers= (text) => {
        setFormFilter(beers.filter(beers => beers.name.toLowerCase().includes(text.toLowerCase())));
      } */

  return (
    <nav class="navbar navbar-light bg-light">
        <br></br>
      <form class="form-inline" onSubmit={submitHandler}>
        <input
        value={formFilter}
        onChange={filterHandler}
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"/>
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
}
export default FilterBeer;
