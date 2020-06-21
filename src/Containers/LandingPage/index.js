import React, { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Questions from './Questions'
import ProgressBar from '../../Components/ProgressBar'
import Answers from './Answers'
import QuestionResult from './QuestionResult'
import ProgressBarWithScore from '../../Components/ProgressBarWithScore'
import { getQuestions, onAnswer, nextQuestion } from '../../Actions/QuestionsAction'
import './Questions.scss'

const LandingPage = props => {
  const { questions = [], selectedQuestion = 1, answers = [], getQuestions, onAnswer, nextQuestion, history } = props
  const [showResult, toggleResult] = useState(false)
  const [answer, setAnswer] = useState(null)

  const questionData = questions[selectedQuestion - 1]

  useEffect(() => {
    getQuestions()
  }, [getQuestions])

  const onAnswerClick = (answer) => () => {
    const data = { questionNo: selectedQuestion, answer: answer, result: answer === questionData.correct_answer }
    setAnswer(data)
    toggleResult(true)
  }

  const onNextQuestion = () => {
    if (selectedQuestion < questions.length) {
      onAnswer(answer)
      nextQuestion()
      setAnswer(null)
      toggleResult(false)
    } else {
      history.push('/result')
    }
  }

  const testCompleted = (answers.length / questions.length) * 100 // percentage of test completed

  return (
    <Fragment>
      <div className='questions-card'>
        <ProgressBar left='0%' width={`${testCompleted}%`} bgColor='gray' parentClassName='top-progress' />
        <div className='question-wrapper'>
          <Questions question={questionData} selectedQuestion={selectedQuestion} questions={questions} />
          <Answers question={questionData} onAnswerClick={onAnswerClick} answer={answer} selectedQuestion={selectedQuestion} />
        </div>
        <div className='result-display'>
          {
            showResult && (
              <QuestionResult
                answer={answer}
                nextQuestion={onNextQuestion}
                selectedQuestion={selectedQuestion}
                totalQuestions={questions.length}
              />
            )
          }
        </div>
        <ProgressBarWithScore questions={questions} answers={answers} />
      </div>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  questions: state.QuestionsReducer.questions,
  selectedQuestion: state.QuestionsReducer.selectedQuestion,
  answers: state.QuestionsReducer.answers
})

const matchDispatchToProps = dispatch => bindActionCreators({
  getQuestions,
  onAnswer,
  nextQuestion
}, dispatch)

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage)
