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
  
  const BingocardForm = ({
    onClickBack,
    onSubmit,
    onUpdate,
    onDiscard,
    onChangeCardNumber,
    onChangeIsSold,
    onChangeOwnedBy,
    onChangeLink,
    editBingocard,
    CardNumber,
    IsSold,
    OwnedBy,
    Link,
   
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
              {editBingocard.isEditing ? "Edit Bingocard" : "Add Bingocard"}
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
                  label="Card Number"
                  name="cardnumber"
                  autoComplete="cardnumber"
                  autoFocus
                  value={CardNumber}
                  onChange={onChangeCardNumber}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Is Sold"
                  name="issold"
                  autoComplete="issold"
                  autoFocus
                  value={IsSold}
                  onChange={onChangeIsSold}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Owned By"
                  name="ownedby"
                  autoComplete="ownedby"
                  autoFocus
                  value={OwnedBy}
                  onChange={onChangeOwnedBy}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Link"
                  name="link"
                  autoComplete="link"
                  autoFocus
                  value={Link}
                  onChange={onChangeLink}
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
              onClick={editBingocard.isEditing ? onUpdate : onSubmit}
            >
              Submit
            </Button>
          </Box>
          <Divider />
        </Card>
      </Box>
    );
  };
  
  export default BingocardForm;
  