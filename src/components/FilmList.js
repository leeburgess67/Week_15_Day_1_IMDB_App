import React from 'react';
import Film from './Film.js'

class FilmList extends React.Component {
  render(props){
    const filmComponents = this.props.films.map((film) => {
      return (<Film title={film.title} link={film.link} key={film.id} showtime={film.showtime}>{film.title}</Film>)
    })

       return (
         <div>
         <ul className="list">{filmComponents}</ul>
         <a href={this.props.link}>{this.props.more}</a>
         </div>
       );
     }

   }






export default FilmList;
