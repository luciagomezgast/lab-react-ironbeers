import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

function NewBeer() {
  const [form, setForm] = useState({
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  });
  const [done, setDone] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name: form.name,
        tagline: form.tagline,
        description: form.description,
        first_brewed: form.first_brewed,
        brewers_tips: form.brewers_tips,
        attenuation_level: form.attenuation_level,
        contributed_by: form.contributed_by,
      })
      .then((result) => {
        setDone(true);
        setForm({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
      })
      })
      .catch((err) => console.log(err));
      }

      
  
  return (
    <>
      <Header />
      {done && (
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">
            Yor beer has been added successfully!!
          </h4>
          <hr />
        </div>
      )}
      <form className="mx-auto" onSubmit={submitHandler}>
        <div className="form-row ">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Name</label>
            <input
              type="text"
              className="form-control"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              id="inputEmail4"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Tagline</label>
            <input
              type="text"
              className="form-control"
              id="inputPassword4"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
            />
          </div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          ></textarea>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress">First Brewed</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={form.first_brewed}
            onChange={(e) => setForm({ ...form, first_brewed: e.target.value })}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputAddress2">Brewers Tips</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            value={form.brewers_tips}
            onChange={(e) => setForm({ ...form, brewers_tips: e.target.value })}
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity">Attenuation Level</label>
            <input
              type="number"
              className="form-control"
              id="inputCity"
              value={form.attenuation_level}
              onChange={(e) =>
                setForm({ ...form, attenuation_level: e.target.value })
              }
            />
          </div>

          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Contributed By</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              value={form.contributed_by}
              onChange={(e) =>
                setForm({ ...form, contributed_by: e.target.value })
              }
            />
          </div>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </>
  );
}

export default NewBeer;
