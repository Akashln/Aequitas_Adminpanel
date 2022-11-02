import {getWalletById, getWalletList } from '../../api/api'
import {
    loadingError,
    loadingSingleWalletData,
    loadingSingleWalletDataError,
    loadingWalletList,
    //loadingSingleWalletDataError,
    setSingleWalletData,
    setWalletList,
} from '../reducer/wallet.reducer'

export const getAllWallets = async (dispatch) => {
    try{
        dispatch(loadingWalletList())
        const res = await getWalletList()
        console.log('get wallet response', res.data)
        if(res.data) {
           dispatch(setWalletList(res.data))
        }
    } catch(error){
        console.log('error',error)
        dispatch(loadingError())
    }
}
export const getWalletDataById = (walletId) => async (dispatch) => {
    try {
      dispatch(loadingSingleWalletData())
      const res = await getWalletById(walletId)
      console.log('get wallet  by id response', res.data)
      if (res.data && res.status === 200) {
        dispatch(setSingleWalletData(res.data))
      }
    } catch (error) {
      console.log('error', error)
      dispatch(loadingSingleWalletDataError())
    }
  }