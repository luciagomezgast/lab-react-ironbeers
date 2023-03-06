import { Route, Routes } from 'react-router-dom';
import AllBeers from './pages/AllBeers.page'
import NewBeer from './pages/NewBeer.page'
import RandomBeer from './pages/RandomBeer.page'
import BeerDetails from './pages/BeerDetails.page'
import HomePage from './pages/Home.page';
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((results) => {
        setBeers(results.data);
        console.log("DATA:", results.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/beers' element={<AllBeers beers={beers}/>}/>
        <Route path='/beers/:id' element={<BeerDetails beers={beers}/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>

    </div>
  );
}

export default App;
