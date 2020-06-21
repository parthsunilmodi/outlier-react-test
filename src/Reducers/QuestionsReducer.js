import {
  GET_QUESTIONS_DATA,
  ON_ANSWER,
  NEXT_QUESTION
} from '../Actions/actionTypes'

const initial = {
  questions: [],
  answers: [],
  selectedQuestion: null
}

export default (state = initial, action) => {
  switch (action.type) {
    case GET_QUESTIONS_DATA:
      return { ...state, questions: [...action.payload], selectedQuestion: 1 }
    case ON_ANSWER: {
      const newAnswerArray = [...state.answers]
      newAnswerArray.push(action.payload)
      return { ...state, answers: newAnswerArray }
    }
    case NEXT_QUESTION:
      return { ...state, selectedQuestion: state.selectedQuestion + 1 }
    default:
      return { ...state }
  }
}
