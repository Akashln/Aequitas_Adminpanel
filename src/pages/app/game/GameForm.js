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
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CircularLoader from "../../../components/loader/CircularLoader";
import { Category } from "@mui/icons-material";
import GamePopup from "./GamePopup";
import EditIcon from "@mui/icons-material/Edit";

const GameForm = ({
  onClickBack,
  onSubmit,
  onUpdate,
  onDiscard,
  onChangeTime,
  onChangeDuration,
  onChangeWinin,
  onChangeWinout,
  onChangeWinningNo,
  editGame,
  Time,
  Duration,
  Winin,
  Winout,
  WinningNo,
  loading,
}) => {
  // useEffect(() => {
  //   if (editUser.isEditing) {
  //     onOpenEditUser(editUser.editItem);
  //   }
  // }, [editUser?.isEditing,editUser.editItem,onOpenEditUser]);

  const [open, setOpen] = useState(false);
  const [timesArr, setTimesArr] = useState([{time: "", value: ""}]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickAddNew = () => {
    setTimesArr([...timesArr, { time: "", value: "" }]);
  };

  const onClickDelete = (item) => {
    let newArr = [...timesArr];
    newArr.splice(item, 1);
    setTimesArr(newArr);
  };
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
            {editGame.isEditing ? "Edit Game" : "Add Game"}
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
                label="Set Time"
                name="time"
                autoComplete="time"
                autoFocus
                value={Time}
                onChange={onChangeTime}
              /> 
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Duration (Minutes)"
                name="duration"
                autoComplete="duration"
                autoFocus
                value={Duration}
                onChange={onChangeDuration}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Win In"
                name="winin"
                autoComplete="winin"
                autoFocus
                value={Winin}
                onChange={onChangeWinin}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Win Out"
                name="winout"
                autoComplete="winout"
                autoFocus
                value={Winout}
                onChange={onChangeWinout}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Win Bingocard No"
                name="winbingocard"
                autoComplete="winbingocard"
                autoFocus
                value={WinningNo}
                onChange={onChangeWinningNo}
              />
            </Grid>
          </Grid>
          {timesArr.some((i)=>i.time==='' || i.value==='') ? null : (
            <Box my={2}>
              <Grid
                container
                justifyContent="space-between"
                alignItems={"center"}
              >
                <Typography fontWeight="bold">Times</Typography>
                <IconButton onClick={handleClickOpen}>
                  <EditIcon />
                </IconButton>
              </Grid>
              <Card variant="outlined">
                <CardContent>
                  {timesArr.map((i, x) => (
                    <Grid container key={x}>
                      <Grid item xs={6}>
                        <Typography>Time</Typography>
                        <Typography>{i.time}</Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography>value</Typography>
                        <Typography>{i.value}</Typography>
                      </Grid>
                    </Grid>
                  ))}
                </CardContent>
              </Card>
            </Box>
          )}
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
            onClick={handleClickOpen}
            sx={{ marginRight: 2 }}
          >
            Add Times
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={editGame.isEditing ? onUpdate : onSubmit}
          >
            Save
          </Button>
        </Box>
        <Divider />
      </Card>
      {open && (
        <GamePopup
          onClose={handleClose}
          timesArr={timesArr}
          setTimesArr={setTimesArr}
          onClickAddNew={onClickAddNew}
          onClickDelete={onClickDelete}
        />
      )}
    </Box>
  );
};

export default GameForm;
