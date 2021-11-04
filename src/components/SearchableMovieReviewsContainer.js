import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'PMmdfSXyL5eSosjid6UilOWONa8FoAFD';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
    + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(data => this.setState({ reviews: data.results }))
    }

    render() {
        return (
            <div className={'searchable-movie-reviews'}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search a Movie Review:
                        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <MovieReviews movieReviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;