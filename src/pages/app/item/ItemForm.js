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
  
  const ItemForm = ({
    onClickBack,
    onSubmit,
    onUpdate,
    onDiscard,
    onChangeWalletAmount,
    onChangeWalletDetails,
    editWallet,
    walletAmount,
    walletDetails,
   editItem,
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
            {/* <Typography ml={1} variant="h6">
              {editItem.isEditing ? "Edit Item" : "Add Item"}
            </Typography> */}
          </Box>
          <Divider />
          <CardContent p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  //margin="normal"
                  required
                  fullWidth
                  label="Item Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={walletAmount}
                  onChange={onChangeWalletAmount}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Item Description"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Item Price"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Item Quantity"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Item Category"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Item Purchasetype"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={walletDetails}
                  onChange={onChangeWalletDetails}
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
            {/* <Button
              variant="contained"
              color="primary"
              onClick={editItem.isEditing ? onUpdate : onSubmit}
            >
              Submit
            </Button> */}
          </Box>
          <Divider />
        </Card>
      </Box>
    );
  };
  
  export default ItemForm;
  