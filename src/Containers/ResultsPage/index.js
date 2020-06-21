import React from 'react'
import { connect } from 'react-redux'
import './Result.scss'

const ResultPage = props => {
  const { answers = [], questions = [] } = props

  const rightAnswers = answers.filter(x => x.result).length // current score
  const rightAnswersPercentage = (rightAnswers / answers.length) * 100 // current percentage
  const maxScore = (questions.length - answers.length) + rightAnswers // maximum score possible
  const maxScorePercentage = (maxScore / questions.length) * 100 // maximum score possible in percentage
  const minScorePercentage = (rightAnswers / questions.length) * 100 // minimum score possible in percentage

  return (
    <div className='result-page'>
      <div className='result-page__wrapper'>
        <h1>Quiz Result</h1>
        <div className='result-page__wrapper__font'>
          Min score: {answers.length ? minScorePercentage.toFixed(0) : 0}%
        </div>
        <div className='result-page__wrapper__font'>
          Score: {answers.length ? rightAnswersPercentage.toFixed(0) : 0}%
        </div>
        <div className='result-page__wrapper__font'>
          Max Score: {answers.length ? maxScorePercentage.toFixed(0) : 100}%
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  questions: state.QuestionsReducer.questions,
  answers: state.QuestionsReducer.answers
})

export default connect(mapStateToProps, null)(ResultPage)
