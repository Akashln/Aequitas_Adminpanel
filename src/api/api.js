import { AxiosWithToken } from './api-config'

const API_URL = 'http://localhost:8000'

const getUserList = () => {
  const res = AxiosWithToken.get(`${API_URL}/users`)
  return res
}
const getUserById = (userId) => {
  const res = AxiosWithToken.get(`${API_URL}/users?user_id=${userId}`)
  return res
}
const addUser = (payload) => {
  try {
    const res = AxiosWithToken.post(`${API_URL}/users`, payload)
    return res
  } catch (error) {
    console.log('error adding user', error)
  }
}

const updateUser = (userId, payload) => {
  const res = AxiosWithToken.patch(`${API_URL}/users/${userId}`, payload)
  return res
}
const deleteUser = (userId) => {
  const res = AxiosWithToken.delete(`${API_URL}/users/${userId}`)
  return res
}
///////////////    Wallet  ////////////////////////////////////////////////////////////
const getWalletList = () => {
  const res = AxiosWithToken.get(`${API_URL}/wallet`)
  return res
}
const getWalletById = (walletId) => {
  const res = AxiosWithToken.get(`${API_URL}/wallet?wallet_id=${walletId}`)
  return res
}


const getItemList = () => {
  const res = AxiosWithToken.get(`${API_URL}/item`)
  return res
}
const getItemById = (itemId) => {
  const res = AxiosWithToken.get(`${API_URL}/item?item_id=${itemId}`)
  return res
}

const getQuestionList = () => {
  const res = AxiosWithToken.get(`${API_URL}/question`)
  return res
}
const getQuestionById = (questionId) => {
  const res = AxiosWithToken.get(`${API_URL}/question?question_id=${questionId}`)
  return res
}


const getBingocardList = () => {
  const res = AxiosWithToken.get(`${API_URL}/bingocard`)
  return res
}
const getBingocardById = (bingocardId) => {
  const res = AxiosWithToken.get(`${API_URL}/bingocard?bingocard_id=${bingocardId}`)
  return res
}

export { getUserList, getUserById, addUser, updateUser, deleteUser,getWalletById,getWalletList,getItemList,getItemById,getQuestionList,getQuestionById,getBingocardList,getBingocardById}




