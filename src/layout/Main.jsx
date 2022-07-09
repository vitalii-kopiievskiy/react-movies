import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=7986466c&s=matrix')
      .then((request) => request.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (search, type = 'all') => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=7986466c&s=${search}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((request) => request.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
