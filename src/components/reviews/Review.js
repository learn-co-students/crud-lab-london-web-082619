import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review, deleteReview } = this.props
    debugger
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={deleteReview}> X </button>
      </div>
    );
  }

};

export default Review;