import { Box, Card, CardContent, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ListSkeletonLoader } from '../../../components/loader/ListSkeletonLoader'
import { getQuestionDataById } from '../../../redux/actions/question.action';

const ViewQuestion = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch()
  let { questionId } = useParams()
  const state = useSelector((state) => state.question)

  useEffect(() => {
    dispatch(getQuestionDataById(questionId))
   }, [dispatch,questionId])

  return (
    <Box>
         <Card variant="outlined">
         <Box
          display="flex"
          alignItems="center"
          sx={{ background: "#00001508" }}
        >
          <IconButton  onClick={() => navigate(`/question`)} size="large">
            <KeyboardBackspaceIcon color="action" />
          </IconButton>
          <Typography ml={1} variant="h6">
          Question Details
          </Typography>
        </Box>
        <Divider />
        <CardContent>
        {state.singleQuestionData.loading ? (
          ListSkeletonLoader()
        ) : (
          <>
            <Typography>{state.singleQuestionData.question[0]?.question_title}</Typography>
            <Typography>{state.singleQuestionData.question[0]?.question_category}</Typography>
            <Typography>{state.singleQuestionData.question[0]?.question_isused}</Typography>
            <Typography>{state.singleQuestionData.question[0]?.question_answerdetails}</Typography>
            {/* <Typography>{state.singleWalletData.user[0]?.user_number}</Typography>
            <Typography>{state.singleWalletData.user[0]?.role_name}</Typography> */}
          </>
        )}
        </CardContent>
         </Card>
    </Box>
  )
}

export default ViewQuestion;