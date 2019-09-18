import React from 'react';
import './NotFound.scss';
import pageNotFoundImage from "./../../images/3auam8.jpg";

function NotFound() {
  return (<div classname="image-container" id="notFoundPage">
            <img src={pageNotFoundImage} alt="Page not found image."></img>
          </div>
  );
}

export default NotFound;
