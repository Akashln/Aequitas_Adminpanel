import { Box, Card, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ListSkeletonLoader } from '../../../components/loader/ListSkeletonLoader'
import { getBingocardDataById } from '../../../redux/actions/bingocard.action';

const ViewBingocard = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  let { bingocardId } = useParams()
  const state = useSelector((state) => state.bingocard)

  useEffect(() => {
    dispatch(getBingocardDataById(bingocardId))
   }, [dispatch,bingocardId])

  return (
    <Box>
         <Card variant="outlined">
         <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton  onClick={() => navigate(`/bingocard`)} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
          Bingocard Details
          </Typography>
        </Box>
        <Divider />
        <CardContent>
        {state.singleBingocardData.loading ? (
          ListSkeletonLoader()
        ) : (
          <>
            <Typography>{state.singleBingocardData.bingocard[0]?.bingocard_card_number}</Typography>
            <Typography>{state.singleBingocardData.bingocard[0]?.bingocard_is_sold}</Typography>
            <Typography>{state.singleBingocardData.bingocard[0]?.bingocard_owned_by}</Typography>
            <Typography>{state.singleBingocardData.bingocard[0]?.bingocard_link}</Typography>
            {/* <Typography>{state.singleWalletData.user[0]?.user_number}</Typography>
            <Typography>{state.singleWalletData.user[0]?.role_name}</Typography> */}
          </>
        )}
        </CardContent>
         </Card>
    </Box>
  )
}

export default ViewBingocard;