import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bingocardList: {
        bingocards:[],
        loading:false,
    },
    singleBingocardData:{
        bingocard:[],
        loading:false,
    },
}
const bingocardStateSlice = createSlice({
    name:'bingocardList',
    initialState,
    reducers:{
        loadingBingocardList:(state) =>{
            state.bingocardList.loading = true
        },
        setBingocardList: (state, action) => {
            state.bingocardList.wallets = action.payload
            state.bingocardList.loading = false
          },
          loadingError: (state) => {
            state.bingocardList.loading = false
          },
          loadingSingleBingocardData: (state) => {
            state.singleBingocardData.loading = true
          },
          setSingleBingocardData: (state, action) => {
            state.singleBingocardData.wallet = action.payload
            state.singleBingocardData.loading = false
          },
          loadingSingleBingocardDataError: (state) => {
            state.singleBingocardData.loading = false
          },
    },
})

export const {
    setBingocardList,
    loadingBingocardList,
    loadingError,
    loadingSingleBingocardData,
    setSingleBingocardData,
    loadingSingleBingocardDataError,
} = bingocardStateSlice.actions

export default bingocardStateSlice.reducer