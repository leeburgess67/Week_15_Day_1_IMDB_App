import React from 'react';
import FilmList from '../components/FilmList.js'
import '../FilmBox.css'

class FilmBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [
        {title: 'Sausage Party', link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3", showtime: 'Showtimes', id: 1},
        {title: 'Cafe Society',link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3", showtime: 'Showtimes', id: 2},
        {title: 'Morgan',link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3", showtime: 'Showtimes', id: 3},
        {title: 'The 9th Life of Louis Drax',link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3", showtime: 'Showtimes', id: 4},
        {title: 'Naam Hai Akaari',link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3", showtime: 'Showtimes', id: 5},
        {title: 'Equity', link: "https://www.imdb.com/showtimes/?ref_=nv_tp_sh_3",showtime: 'Showtimes', id: 6}
      ],
      more: "See more openings this week"
    }
  }
  render(){
    return (
      <div className="film-box">
        <h1>UK Opening This Week</h1>
        <FilmList films={this.state.films} more={this.state.more}/>
        <div className="openings-box">
      <a href={this.state.films[0].link} className="showtime-link">Get Showtimes</a>
      </div>
      </div>
    );
  }
}

export default FilmBox;
