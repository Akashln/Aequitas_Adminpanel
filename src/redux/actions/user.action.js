import { getUserById, getUserList } from '../../api/api'
import {
  loadingError,
  loadingSingleUserData,
  loadingUserList,
  lodingSingleUserDataError,
  setSingleUserData,
  setUserList,
} from '../reducer/user.reducer'

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(loadingUserList())
    const res = await getUserList()
    console.log('get users response', res.data)
    if (res.data) {
      dispatch(setUserList(res.data))
    }
  } catch (error) {
    console.log('error', error)
    dispatch(loadingError())
  }
}
export const getUserDataById = (userId) => async (dispatch) => {
  try {
    dispatch(loadingSingleUserData())
    const res = await getUserById(userId)
    console.log('get user  by id response', res.data)
    if (res.data && res.status === 200) {
      dispatch(setSingleUserData(res.data))
    }
  } catch (error) {
    console.log('error', error)
    dispatch(lodingSingleUserDataError())
  }
}
