import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    questionList: {
        questions:[],
        loading:false,
    },
    singleQuestionData:{
        question:[],
        loading:false,
    },
}
const questionStateSlice = createSlice({
    name:'questionList',
    initialState,
    reducers:{
        loadingQuestionList:(state) =>{
            state.questionList.loading = true
        },
        setQuestionList: (state, action) => {
            state.questionList.questions = action.payload
            state.questionList.loading = false
          },
          loadingError: (state) => {
            state.questionList.loading = false
          },
          loadingSingleQuestionData: (state) => {
            state.singleQuestionData.loading = true
          },
          setSingleQuestionData: (state, action) => {
            state.singleQuestionData.question = action.payload
            state.singleQuestionData.loading = false
          },
          loadingSingleQuestionDataError: (state) => {
            state.singleQuestionData.loading = false
          },
    },
})

export const {
    setQuestionList,
    loadingQuestionList,
    loadingError,
    loadingSingleQuestionData,
    setSingleQuestionData,
    loadingSingleQuestionDataError,
} = questionStateSlice.actions

export default questionStateSlice.reducer