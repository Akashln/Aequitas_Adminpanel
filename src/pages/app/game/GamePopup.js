import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs, { Dayjs } from 'dayjs';

import {
  Box,
  Card,
  CardContent,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

export default function GamePopup({
  onClose,
  timesArr,
  setTimesArr,
  onClickDelete,
  onClickAddNew,
}) {
  return (
    <Dialog open={true}>
      <DialogTitle>
        <Typography variant="h6" component="span" fontWeight="bold">
          Add Times
        </Typography>

        <IconButton
          style={{ position: "absolute", right: 0, top: 8 }}
          onClick={onClose}
        >
          <CloseIcon color="disabled" />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        {timesArr.length === 0 ? [{ time: '', value: "" }] : timesArr.map(
          (i, x) => (
            <Grid container spacing={3} key={x} my={0}>
              <Grid item xs={5.5}>
                {/* <TextField
                    required
                    fullWidth
                    label="Time"
                    name="time"
                    value={i.time}
                    autoComplete="time"
                    onChange={(e) => {
                      let newArr = [...timesArr];
                      newArr[x].time = e.target.value;
                      setTimesArr(newArr);
                    }}
                  /> */}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="DateTimePicker"
                    value={i.time}
                    onChange={(newValue) => {
                      console.log('newValue',dayjs(newValue).format('DD/MM/YYYY,HH:mm'))
                      let newArr = [...timesArr];
                      newArr[x].time =dayjs(newValue).format('DD/MM/YYYY,HH:mm');
                      setTimesArr(newArr);
                    }}
                  />
                </LocalizationProvider>
              </Grid>
              <Grid item xs={5.5}>
                <TextField
                  // margin="normal"
                  required
                  fullWidth
                  label="Value"
                  name="value"
                  value={i.value}
                  autoComplete="value"
                  onChange={(e) => {
                    let newArr = [...timesArr];
                    newArr[x].value = e.target.value;
                    setTimesArr(newArr);
                  }}
                />
              </Grid>
              <Grid item xs={1}>
                {x === 0 ? null : (
                  <IconButton onClick={onClickDelete}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Grid>
            </Grid>
          )
        )}
      </DialogContent>
      <DialogActions sx={{ padding: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginRight: 1 }}
          onClick={onClickAddNew}
        >
          Add New
        </Button>
        <Button variant="contained" color="primary" onClick={onClose}>
          Save
        </Button>
      </DialogActions>
      {/* <Card variant="outlined">
        <CardContent>
          
        </CardContent>
      
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"

          // sx={{ background: "#00001508" }}
        >
         
        </Box>
        <Divider />
      </Card> */}
    </Dialog>
  );
}
