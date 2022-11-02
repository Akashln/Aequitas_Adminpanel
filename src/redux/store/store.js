import { configureStore } from '@reduxjs/toolkit'
import bingocardReducer from '../reducer/bingocard.reducer'
import itemReducer from '../reducer/item.reducer'
import NotificationReducer from '../reducer/NotificationReducer'
import questionReducer from '../reducer/question.reducer'
import userReducer from '../reducer/user.reducer'
import walletReducer from '../reducer/wallet.reducer'

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    user: userReducer,
    notifications: NotificationReducer,
    wallet:walletReducer,
    item:itemReducer,
    question:questionReducer,
    bingocard:bingocardReducer,
  },
})
