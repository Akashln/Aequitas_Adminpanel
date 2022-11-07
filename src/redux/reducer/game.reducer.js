import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    gameList: {
        games:[],
        loading:false,
    },
    singleGameData:{
        game:[],
        loading:false,
    },
}
const gameStateSlice = createSlice({
    name:'gameList',
    initialState,
    reducers:{
        loadingGameList:(state) =>{
            state.gameList.loading = true
        },
        setGameList: (state, action) => {
            state.gameList.games = action.payload
            state.gameList.loading = false
          },
          loadingError: (state) => {
            state.gameList.loading = false
          },
          loadingSingleGameData: (state) => {
            state.singleGameData.loading = true
          },
          setSingleGameData: (state, action) => {
            state.singleGameData.game = action.payload
            state.singleGameData.loading = false
          },
          loadingSingleGameDataError: (state) => {
            state.singleGameData.loading = false
          },
    },
})

export const {
    setGameList,
    loadingGameList,
    loadingError,
    loadingSingleGameData,
    setSingleGameData,
    loadingSingleGameDataError,
} = gameStateSlice.actions

export default gameStateSlice.reducer