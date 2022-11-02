import {getItemById, getItemList } from '../../api/api'
import {
    loadingError,
    loadingSingleItemData,
    loadingSingleItemDataError,
    loadingItemList,
    setSingleItemData,
    setItemList,
} from '../reducer/item.reducer'

export const getAllItems = async (dispatch) => {
    try{
        dispatch(loadingItemList())
        const res = await getItemList()
        console.log('get item response', res.data)
        if(res.data) {
           dispatch(setItemList(res.data))
        }
    } catch(error){
        console.log('error',error)
        dispatch(loadingError())
    }
}
export const getItemDataById = (itemId) => async (dispatch) => {
    try {
      dispatch(loadingSingleItemData())
      const res = await getItemById(itemId)
      console.log('get item by id response', res.data)
      if (res.data && res.status === 200) {
        dispatch(setSingleItemData(res.data))
      }
    } catch (error) {
      console.log('error', error)
      dispatch(loadingSingleItemDataError())
    }
  }