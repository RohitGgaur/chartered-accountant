import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
import jsonfile from "./CA.json";

const Home = () => {
    const [searchString, setSearchString] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [ordata,setordata]=useState(jsonfile);

    const handleSearch = (e) => {
        console.log("OK");
        const searchInput = searchString;
    
        // Update the input value in state
        // setSearchInput(searchInput);
    
        // Filter the JSON data based on the search input
        const results = jsonfile.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
    
        // Update the search results in state
        // setSearchResults(results);
        setordata(results);
        // Log the search results to the console
        console.log(results);
      };
      

    return (
      <div>
        <div className="home-wrapper">
          <div className="home-content">
            <div className="input">
              <input
                type="text"
                className="in"
                placeholder="Search Here..."
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <button className="btn1" onClick={handleSearch}>
                Search
              </button>

              {/* <ul>
                {searchResults.map((item) => (
                  <li key={item.id}>
                    {item.name}, {item.price}{" "}
                  </li>
                ))}
              </ul> */}
            </div>
            {/* btn-primary */}

            <div className="cards">
              {ordata.map((index) => {
                return (
                  <>
                    <div class="card">
                      <img src={index.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{index.name}</h5>
                        <p class="card-text">{index.intro}</p>
                        <div className="button3">
                          <NavLink
                            className="button2"
                            to={`/individual/${index.id}`}
                          >
                            More about me
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};
export default Home;
