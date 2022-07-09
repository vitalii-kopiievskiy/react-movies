import React, { Component } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=7986466c&s=matrix")
      .then((request) => request.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (value) => {
    fetch(`http://www.omdbapi.com/?apikey=7986466c&s=${value}`)
      .then((request) => request.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies}/>
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
