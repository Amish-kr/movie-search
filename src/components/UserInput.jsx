import React, { useState, useEffect } from "react";
import ShowResults from "./ShowResults";

export default function UserInput() {
  const [state, setState] = useState({
    name: "",
  });
  const [data, setData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setIsSubmitted(false);
    setState({ name: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && state.name.length > 0) {
      fetch(`https://api.tvmaze.com/search/shows?q=${state.name}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log(json);
          setData(json);
        })
        .catch((error) => {
          console.error(error);
        });
      setState({ name: "" });
    }
  }, [isSubmitted, state.name]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="wrap">
          <div className="search">
            <input
              type="name"
              onChange={handleChange}
              value={state.name}
              className="input"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </form>
      <ShowResults data={data} />
    </div>
  );
}
