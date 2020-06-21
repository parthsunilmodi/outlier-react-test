import QuestionsData from '../questions.json'
import { GET_QUESTIONS_DATA, ON_ANSWER, NEXT_QUESTION } from './actionTypes'

export const getQuestions = () => dispatch => {
  return dispatch({
    type: GET_QUESTIONS_DATA,
    payload: QuestionsData
  })
}

export const onAnswer = answer => dispatch => {
  return dispatch({
    type: ON_ANSWER,
    payload: answer
  })
}

export const nextQuestion = () => dispatch => {
  return dispatch({
    type: NEXT_QUESTION
  })
}
