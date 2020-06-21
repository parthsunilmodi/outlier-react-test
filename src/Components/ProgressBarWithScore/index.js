import React from 'react'
import './ProgressBarWithScore.scss'

export const ProgressBarWithScore = props => {
  const { answers = [], questions = [] } = props

  const rightAnswers = answers.filter(x => x.result).length // current score
  const rightAnswersPercentage = (rightAnswers / answers.length) * 100 // current percentage
  const maxScore = (questions.length - answers.length) + rightAnswers // maximum score possible
  const maxScorePercentage = (maxScore / questions.length) * 100 // maximum score possible in percentage
  const minScorePercentage = (rightAnswers / questions.length) * 100 // minimum score possible in percentage
  return (
    <div className='progress-wrapper'>
      <div className='progress-wrapper__score'>
        <div className='progress-wrapper__score__min-score'>
          Score: {answers.length ? rightAnswersPercentage.toFixed(0) : 0}%
        </div>
        <div className='progress-wrapper__score__max-score'>
          Max Score: {answers.length ? maxScorePercentage.toFixed(0) : 100}%
        </div>
      </div>
      <div className='progress-wrapper__minibar'>
        <div
          className='progress-wrapper__minibar__miniBarProgress'
          style={{ left: 0, width: `${minScorePercentage}%`, backgroundColor: '#000', zIndex: 3 }}
        />
        <div
          className='progress-wrapper__minibar__miniBarProgress'
          style={{ left: 0, width: `${rightAnswersPercentage}%`, backgroundColor: '#717171', zIndex: 2 }}
        />
        <div
          className='progress-wrapper__minibar__miniBarProgress'
          style={{ left: 0, width: `${maxScorePercentage}%`, backgroundColor: '#d2d2d2', zIndex: 1 }}
        />
      </div>
    </div>
  )
}

export default ProgressBarWithScore
