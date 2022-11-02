import {
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
  } from "@mui/material";
  import React, { useEffect } from "react";
  import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
  import CircularLoader from "../../../components/loader/CircularLoader";
import { Category } from "@mui/icons-material";
  
  const QuestionForm = ({
    onClickBack,
    onSubmit,
    onUpdate,
    onDiscard,
    onChangeTitle,
    onChangeCategory,
    onChangeIsused,
    onChangeAnswerdetails,
    onChangeEditQuestion,
    editQuestion,
    Title,
    Category,
    Isused,
    Answerdetails,
    loading,
  }) => {
    // useEffect(() => {
    //   if (editUser.isEditing) {
    //     onOpenEditUser(editUser.editItem);
    //   }
    // }, [editUser?.isEditing,editUser.editItem,onOpenEditUser]);
    return (
      <Box>
        {loading && <CircularLoader />}
        <Card variant="outlined">
          <Box
            display="flex"
            alignItems="center"
            sx={{ background: "#00001508" }}
          >
            <IconButton onClick={onClickBack} size="large">
              <KeyboardBackspaceIcon color="action" />
            </IconButton>
            <Typography ml={1} variant="h6">
              {editQuestion.isEditing ? "Edit Question" : "Add Question"}
            </Typography>
          </Box>
          <Divider />
          <CardContent p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  //margin="normal"
                  required
                  fullWidth
                  label="Question Title"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={Title}
                  onChange={onChangeTitle}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Category"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={Category}
                  onChange={onChangeCategory}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Isused"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={Isused}
                  onChange={onChangeIsused}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Answerdetails"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={Answerdetails}
                  onChange={onChangeAnswerdetails}
                />
              </Grid>
              
             
            </Grid>
          </CardContent>
          {/* <Divider/> */}
          <Box
            p={2}
            display="flex"
            justifyContent="flex-end"
            // sx={{ background: "#00001508" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={editQuestion.isEditing ? onUpdate : onSubmit}
            >
              Submit
            </Button>
          </Box>
          <Divider />
        </Card>
      </Box>
    );
  };
  
  export default QuestionForm;
  