import {
  Autocomplete,
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
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import moment, { duration } from "moment";
import momentz from "moment-timezone";

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
  const [timesArr, setTimesArr] = useState([{ minute: "", sec:"", value: "" }]);
  const [date, setDate] = useState("");
  const [scheduleTimeZone, setscheduleTimeZone] = useState(new Date());
  const [timeZone, settimeZone] = useState(moment.tz.guess());
  const [inputTimeZoneValue, setinputTimeZoneValue] = useState("");
  const [getpopupTimes, setGetpopupTimes] = useState([]);
  console.log(getpopupTimes);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onClickAddNew = () => {
    setTimesArr([...timesArr, { minute: "",sec:"", value: "" }]);
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
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  renderInput={(props) => <TextField fullWidth {...props} />}
                  label="Set Time"
                  value={date}
                  onChange={(newValue) => {
                    console.log(
                      "newValue",
                      dayjs(newValue).format("DD/MM/YYYY hh:mm a")
                    );
                    setDate(dayjs(newValue).format("DD/MM/YYYY hh:mm a"));
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} md={6}>
              <Autocomplete
                disablePortal
                disableClearable
                fullWidth
                value={timeZone}
                onChange={(event, newValue) => {
                  settimeZone(newValue);
                  const time = moment(scheduleTimeZone)
                    .tz(`${newValue}`)
                    .format("DD/MM/yyyy hh:mm a");
                  setDate(time);
                  // const newTime = moment(scheduleTimeZone)
                  //   .tz(`${newValue}`)
                  //   .format();
                  // setDateTime(newTime);
                }}
                inputValue={inputTimeZoneValue}
                onInputChange={(event, newInputValue) => {
                  setinputTimeZoneValue(newInputValue);
                }}
                id="combo-box-demo"
                options={momentz.tz.names()}
                renderInput={(params) => (
                  <TextField {...params} label="Timezone" variant="outlined" />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                // margin="normal"
                required
                fullWidth
                label="Duration"
                name="email"
                autoComplete="email"
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
                name="email"
                autoComplete="email"
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
                name="email"
                autoComplete="email"
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
                name="email"
                autoComplete="email"
                autoFocus
                value={WinningNo}
                onChange={onChangeWinningNo}
              />
            </Grid>
          </Grid>
          {timesArr.some((i) => i.time === "" || i.value === "") ? null : (
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
                        <Typography>{i.minute}:{i.sec}</Typography>
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
          setGetpopupTimes={setGetpopupTimes}
        />
      )}
    </Box>
  );
};

export default GameForm;
