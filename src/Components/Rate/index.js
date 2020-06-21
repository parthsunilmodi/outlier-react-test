import React from 'react'
import './Rate.scss'

// method to get the rating based on the difficulty
const getRating = rating => {
  switch (rating) {
    case 'easy':
      return 1
    case 'medium':
      return 2
    case 'hard':
      return 3
    default:
      return 1
  }
}

const Rate = props => {
  const { count = 3, difficulty } = props
  return (
    <div>
      {
        new Array(count).fill(undefined).map((rate, index) =>
          <span key={index} className={`fa fa-star ${index < getRating(difficulty) ? 'star checked' : 'star'}`} />
        )
      }
    </div>
  )
}

export default Rate
