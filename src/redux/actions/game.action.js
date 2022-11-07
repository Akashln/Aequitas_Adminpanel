import {getGameById, getGameList } from '../../api/api'
import {
    loadingError,
    loadingSingleGameData,
    loadingSingleGameDataError,
    loadingGameList,
    setSingleGameData,
    setGameList,
} from '../reducer/game.reducer';

export const getAllGames = async (dispatch) => {
    try{
        dispatch(loadingGameList())
        const res = await getGameList()
        console.log('get game response', res.data)
        if(res.data) {
           dispatch(setGameList(res.data))
        }
    } catch(error){
        console.log('error',error)
        dispatch(loadingError())
    }
}
export const getGameDataById = (gameId) => async (dispatch) => {
    try {
      dispatch(loadingSingleGameData())
      const res = await getGameById(gameId)
      console.log('get game  by id response', res.data)
      if (res.data && res.status === 200) {
        dispatch(setSingleGameData(res.data))
      }
    } catch (error) {
      console.log('error', error)
      dispatch(loadingSingleGameDataError())
    }
  }