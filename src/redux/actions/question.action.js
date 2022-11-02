import {getQuestionById, getQuestionList } from '../../api/api'
import {
    loadingError,
    loadingSingleQuestionData,
    loadingSingleQuestionDataError,
    loadingQuestionList,
    setSingleQuestionData,
    setQuestionList,
} from '../reducer/question.reducer';

export const getAllQuestion = async (dispatch) => {
    try{
        dispatch(loadingQuestionList())
        const res = await getQuestionList()
        console.log('get question response', res.data)
        if(res.data) {
           dispatch(setQuestionList(res.data))
        }
    } catch(error){
        console.log('error',error)
        dispatch(loadingError())
    }
}
export const getQuestionDataById = (questionId) => async (dispatch) => {
    try {
      dispatch(loadingSingleQuestionData())
      const res = await getQuestionById(questionId)
      console.log('get question  by id response', res.data)
      if (res.data && res.status === 200) {
        dispatch(setSingleQuestionData(res.data))
      }
    } catch (error) {
      console.log('error', error)
      dispatch(loadingSingleQuestionDataError())
    }
  }