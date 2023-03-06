import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

function RandomBeerR(){

    const[beerR, setBeerR]= useState({})

    useEffect(() => {
        axios
          .get('https://ih-beers-api2.herokuapp.com/beers/random')
          .then((result) => {
            setBeerR(result.data);
            console.log("DATA BEERR RANDOM:", result.data);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <>
        <Header/>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={beerR.image_url} alt="Card "/>
  <div className="card-body">
    <h3 className="card-text">{beerR.name}</h3>
    <p>{beerR.tagline}</p>
    <p>{beerR.first_brewed}</p>
    <p>{beerR.attenuation_level}</p>
    <p>{beerR.description}</p>
    <p>{beerR.contributed_by}</p>
  </div>
</div>
        </>
    )
}
export default RandomBeerR;