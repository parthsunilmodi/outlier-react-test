import React from 'react'
import Rate from '../../Components/Rate'
import { decodeText } from '../../utils/helperMethods'

const Questions = props => {
  const { question = {}, selectedQuestion, questions } = props
  const { category = '', difficulty = '', question: questionText = '' } = question || {}
  return (
    <div className='question-wrapper__question'>
      <div className='question-wrapper__question__question-no'>Question {`${selectedQuestion}`} of {questions.length}</div>
      <div className='question-wrapper__question__category'>
        {decodeText(category)}
      </div>
      <div className='question-wrapper__question__rating'>
        <Rate difficulty={difficulty} />
      </div>
      <div className='question-wrapper__question__question-text'>
        {decodeText(questionText)}
      </div>
    </div>
  )
}

export default Questions
