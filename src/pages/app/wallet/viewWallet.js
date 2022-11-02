import { Box, Card, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
//import { getWalletDataById } from '../../../redux/actions/user.action'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ListSkeletonLoader } from '../../../components/loader/ListSkeletonLoader'
import { getWalletDataById } from '../../../redux/actions/wallet.action';

const ViewWallet = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  let { walletId } = useParams()
  const state = useSelector((state) => state.wallet)

  useEffect(() => {
    dispatch(getWalletDataById(walletId))
   }, [dispatch,walletId])

  return (
    <Box>
         <Card variant="outlined">
         <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton  onClick={() => navigate(`/wallet`)} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
          Wallet Details
          </Typography>
        </Box>
        <Divider />
        <CardContent>
        {state.singleWalletData.loading ? (
          ListSkeletonLoader()
        ) : (
          <>
            <Typography>{state.singleWalletData.wallet[0]?.wallet_amount}</Typography>
            <Typography>{state.singleWalletData.wallet[0]?.wallet_details}</Typography> 
            {/* <Typography>{state.singleWalletData.user[0]?.user_number}</Typography>
            <Typography>{state.singleWalletData.user[0]?.role_name}</Typography> */}
          </>
        )}
        </CardContent>
         </Card>
    </Box>
  )
}

export default ViewWallet;