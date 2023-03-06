import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";

function BeerDetails(){

    const { id }= useParams()

    const[beer, setBeer]= useState({})

    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
          .then((result) => {
            setBeer(result.data);
            console.log("DATA BEER:", result.data);
          })
          .catch((err) => console.log(err));
      }, []);

    return(
        <>
        <Header/>
        <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={beer.image_url} alt="Card "/>
  <div className="card-body">
    <h3 className="card-text">{beer.name}</h3>
    <p>{beer.tagline}</p>
    <p>{beer.first_brewed}</p>
    <p>{beer.attenuation_level}</p>
    <p>{beer.description}</p>
    <p>{beer.contributed_by}</p>
  </div>
</div>
        </>
    )
}

export default BeerDetails;