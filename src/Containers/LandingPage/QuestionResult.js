import React from 'react'

const QuestionResult = props => {
  const { answer: { result }, nextQuestion, selectedQuestion, totalQuestions } = props
  console.log('selectedQuestion : ', selectedQuestion)
  console.log('totalQuestions : ', totalQuestions)
  return (
    <div className='result-display__score'>
      <div className='result-display__score__result'>
        {result ? 'Correct!' : 'Sorry!'}
      </div>
      <div className='result-display__score__next-question'>
        <button onClick={nextQuestion}>{selectedQuestion < totalQuestions ? 'Next Question' : 'Show Result'}</button>
      </div>
    </div>
  )
}

export default QuestionResult
