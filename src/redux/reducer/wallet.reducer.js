import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    walletList: {
        wallets:[],
        loading:false,
    },
    singleWalletData:{
        wallet:[],
        loading:false,
    },
}
const walletStateSlice = createSlice({
    name:'walletList',
    initialState,
    reducers:{
        loadingWalletList:(state) =>{
            state.walletList.loading = true
        },
        setWalletList: (state, action) => {
            state.walletList.wallets = action.payload
            state.walletList.loading = false
          },
          loadingError: (state) => {
            state.walletList.loading = false
          },
          loadingSingleWalletData: (state) => {
            state.singleWalletData.loading = true
          },
          setSingleWalletData: (state, action) => {
            state.singleWalletData.wallet = action.payload
            state.singleWalletData.loading = false
          },
          loadingSingleWalletDataError: (state) => {
            state.singleWalletData.loading = false
          },
    },
})

export const {
    setWalletList,
    loadingWalletList,
    loadingError,
    loadingSingleWalletData,
    setSingleWalletData,
    loadingSingleWalletDataError,
} = walletStateSlice.actions

export default walletStateSlice.reducer