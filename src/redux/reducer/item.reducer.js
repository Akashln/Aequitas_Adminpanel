import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemList: {
        items:[],
        loading:false,
    },
    singleItemData:{
        wallet:[],
        loading:false,
    },
}
const itemStateSlice = createSlice({
    name:'itemList',
    initialState,
    reducers:{
        loadingItemList:(state) =>{
            state.itemList.loading = true
        },
        setItemList: (state, action) => {
            state.itemList.items = action.payload
            state.itemList.loading = false
          },
          loadingError: (state) => {
            state.itemList.loading = false
          },
          loadingSingleItemData: (state) => {
            state.singleItemData.loading = true
          },
          setSingleItemData: (state, action) => {
            state.singleItemData.item = action.payload
            state.singleItemData.loading = false
          },
          loadingSingleItemDataError: (state) => {
            state.singleItemData.loading = false
          },
    },
})

export const {
    setItemList,
    loadingItemList,
    loadingError,
    loadingSingleItemData,
    setSingleItemData,
    loadingSingleItemDataError,
} = itemStateSlice.actions

export default itemStateSlice.reducer