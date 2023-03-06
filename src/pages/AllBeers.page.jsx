import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../allBeers.css";
import FilterBeer from "../components/FilterBeer";

function AllBeers({ beers }) {

   
  return (
    <>
      <Header />
      <FilterBeer/>
      <div className="" style={{ width: "400px" }} id="divbeers">
      {beers.map((beer) => {
        return (
          
            <div
              className="card mb-3 "
              key={beer._id}>
              <div className="row g-0 ">
                <div className="col-md-3 ">
                  <img
                    src={beer.image_url}
                    className="img-fluid rounded-start"
                    id="IMG"
                    alt="beer"/>
                </div>
                <div className="col-md-8 ">
                  <div className="card-body">
                    <Link to={"/beers/" + beer._id}>
                      <h5 className="card-title fs4 ">{beer.name}</h5>
                    </Link>
                    <p className="card-text">
                      <small className="text-muted">
                        {beer.contributed_by}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
        );
      })}
      </div>
    </>
  );
}

export default AllBeers;
