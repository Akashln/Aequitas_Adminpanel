import { Box, Card, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
//import { getWalletDataById } from '../../../redux/actions/user.action'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ListSkeletonLoader } from '../../../components/loader/ListSkeletonLoader';
import { getItemDataById } from '../../../redux/actions/item.action';

const ViewItem = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  let { ItemId } = useParams()
  const state = useSelector((state) => state.item)

  useEffect(() => {
    dispatch(getItemDataById(itemId))
   }, [dispatch,itemId])

  return (
    <Box>
         <Card variant="outlined">
         <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton  onClick={() => navigate(`/item`)} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
             Item Details
          </Typography>
        </Box>
        <Divider />
        <CardContent>
        {state.singleItemData.loading ? (
          ListSkeletonLoader()
        ) : (
          <>
            <Typography>{state.singleItemData.item[0]?.item_name}</Typography>
            <Typography>{state.singleItemData.item[0]?.item_description}</Typography>
            <Typography>{state.singleItemData.item[0]?.item_price}</Typography>
            <Typography>{state.singleItemData.item[0]?.item_qty}</Typography> 
            <Typography>{state.singleItemData.item[0]?.item_category}</Typography>
            <Typography>{state.singleItemData.item[0]?.item_purchasetype}</Typography> 
            {/* <Typography>{state.singleWalletData.user[0]?.user_number}</Typography>
            <Typography>{state.singleWalletData.user[0]?.role_name}</Typography> */}
          </>
        )}
        </CardContent>
         </Card>
    </Box>
  )
}

export default ViewItem;