// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return props.movieReviews.map(review => {
        return (
            <div key={review.headline}>
                <h3>Movie: <a href={review.link.url}>{review.display_title}</a></h3>
                <p>{review.headline}</p>
                <p>Critics: {review.critics_pick}</p>
            </div>
        )
    })
}

export default MovieReviews;