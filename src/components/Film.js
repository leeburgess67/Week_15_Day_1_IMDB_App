import React from 'react';

const Film = function(props) {
    return (
      <li>
        <a href={props.link} className="showtime-text">  {props.children}</a>
        <a href={props.link} >  {props.showtime}</a>
      </li>
    );
}
export default Film;
