import { Link } from "react-router-dom";
import beersPic from '../assets/beers.png'
import randomPic from '../assets/random-beer.png'
import newPic from '../assets/new-beer.png'


function HomePage() {
  return (
   
    <div className="mx-auto">
    <div className="card mb-3 " style={{ width: "33rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={beersPic} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to='/beers'><h2 className="card-title">All Beers</h2></Link>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil qui placeat hic illo quod aliquid recusandae, reprehenderit tempore necessitatibus delectus aperiam inventore quaerat exercitationem. Voluptatum nobis quam qui tempore.
            </p>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ width: "33rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={randomPic} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
          <Link to='/random-beer'><h2 className="card-title">Random Beer</h2></Link>
            
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil qui placeat hic illo quod aliquid recusandae, reprehenderit tempore necessitatibus delectus aperiam inventore quaerat exercitationem. Voluptatum nobis quam qui tempore.
            </p>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="card mb-3" style={{ width: "33rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={newPic} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Link to="/new-beer"> <h2 className="card-title">New Beer</h2></Link>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nihil qui placeat hic illo quod aliquid recusandae, reprehenderit tempore necessitatibus delectus aperiam inventore quaerat exercitationem. Voluptatum nobis quam qui tempore.
            </p>
            <p className="card-text">
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    

  );
}

export default HomePage;
