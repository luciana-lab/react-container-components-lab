// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({ movies }) => {
    return (
        <div className="review-list">
            {movies && movies.map(movie => {
                return (
                    <div key={movie.headline} className="review">
                        <h3>Movie: <a className="review-link" href={movie.link.url}>{movie.display_title}</a></h3>
                        <p>{movie.headline}</p>
                        <p>Critics: {movie.critics_pick}</p>
                    </div>
                )
            })}
        </div>
    )
}


MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews;