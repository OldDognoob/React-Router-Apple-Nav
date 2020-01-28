import React from 'react';

import { Link } from 'react-router-dom';

const UpNav = () => {
    return (
      <div>
        <div className="App">
          <h1>Apple Nav</h1>
          <div>
            <Link to="/">
            Home
            </Link>
          </div>
          <div>
            <Link to="/UpNav">
           UpNav
            </Link>   
          </div>
          <div>
              <Link to="./IPad">
                  IPad
              </Link>
          </div>
          <div>
              <Link to="./iphone">
                  IPhone
              </Link>
          </div>
          <div>
              <Link to="./mac">
                  Mac
              </Link>
          </div>
          <div>
              <Link to="./tv">
                  TV
              </Link>
          </div>
          <div>
              <Link to="/music">
                  Music
              </Link>
          </div>
          <div>
            <Link to="/Support">
            Support
            </Link>
          </div>
        </div>
      </div>
    );
  };

  export default UpNav;