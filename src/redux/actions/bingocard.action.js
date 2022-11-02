import {getBingocardById, getBingocardList } from '../../api/api'
import {
    loadingError,
    loadingSingleBingocardData,
    loadingSingleBingocardDataError,
    loadingBingocardList,
    //loadingSingleWalletDataError,
    setSingleBingocardData,
    setBingocardList,
} from '../reducer/bingocard.reducer';

export const getAllBingocards = async (dispatch) => {
    try{
        dispatch(loadingBingocardList())
        const res = await getBingocardList()
        console.log('get bingocard response', res.data)
        if(res.data) {
           dispatch(setBingocardList(res.data))
        }
    } catch(error){
        console.log('error',error)
        dispatch(loadingError())
    }
}
export const getBingocardDataById = (bingocardId) => async (dispatch) => {
    try {
      dispatch(loadingSingleBingocardData())
      const res = await getBingocardById(bingocardId)
      console.log('get bingocard  by id response', res.data)
      if (res.data && res.status === 200) {
        dispatch(setSingleBingocardData(res.data))
      }
    } catch (error) {
      console.log('error', error)
      dispatch(loadingSingleBingocardDataError())
    }
  }