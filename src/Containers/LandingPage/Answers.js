import React, { useEffect, useState } from 'react'
import { decodeText } from '../../utils/helperMethods'

// shuffle the answers of the array
const shuffleArray = arr => arr.sort(() => Math.random() - 0.4)

const Answers = props => {
  const [answerArray, setAnswerArray] = useState([])
  const {
    answer, selectedQuestion, onAnswerClick,
    question: { type, incorrect_answers: inCorrectAnswers = [], correct_answer: correctAnswer } = {}
  } = props
  useEffect(() => {
    setAnswerArray(shuffleArray([...inCorrectAnswers, correctAnswer])) // answers of the question
  }, [selectedQuestion])

  const getClassName = (ans) => {
    if (!answer) return ''
    if (answer.answer === ans && correctAnswer === ans) return 'selected correct'
    if (correctAnswer === ans) return 'correct'
    if (answer.answer === ans) return 'selected'
    return ''
  }

  const renderAnswer = () => {
    switch (type) {
      case 'multiple':
        return answerArray.map(ans => {
          return (
            <button
              key={ans}
              className={getClassName(ans)}
              disabled={answer}
              onClick={onAnswerClick(ans)}
            >
              {decodeText(ans)}
            </button>
          )
        })
      case 'boolean':
        return answerArray.map(ans => {
          return (
            <button
              key={ans}
              className={getClassName(ans)}
              disabled={answer}
              onClick={onAnswerClick(ans)}
            >
              {decodeText(ans)}
            </button>
          )
        })
      default:
        return answerArray.map(ans => {
          return (
            <button
              key={ans}
              className={getClassName(ans)}
              disabled={answer}
              onClick={onAnswerClick(ans)}
            >
              {decodeText(ans)}
            </button>
          )
        })
    }
  }

  return (
    <div className='question-wrapper__answer-wrapper'>
      {renderAnswer(type)}
    </div>
  )
}

export default Answers
