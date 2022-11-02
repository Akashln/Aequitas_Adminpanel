import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Paper,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { playerData } from "./player.service";
const PlayerScreen = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <Card variant="outlined">
      <Box px={2} py={4} display="flex" alignItems="center">
        <Typography color="#212121" variant="h6" mr={2}>
          Player Details
        </Typography>
        <Slider
          defaultValue={50}
          size="small"
          aria-label="Default"
          valueLabelDisplay="auto"
          sx={{ width: "100px",}}
        />
        {/* <Button color="primary" variant="contained">
            Add Player
          </Button> */}
      </Box>
      <Divider />
      <CardContent>
        <Box display="flex" mb={2}>
          <TextField
            type="search"
            //value={searchVideo}
            fullWidth
            variant="outlined"
            placeholder="Search user by name"
            size="small"
            onChange={(e) => {}}
            sx={{ marginRight: 1 }}
          />

          <Button color="primary" variant="contained">
            Search
          </Button>
        </Box>
        <Paper variant="outlined">
          <TableContainer style={{ maxHeight: "400px" }} className="scrollbar">
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow style={{ fontWeight: "bold" }}>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">User Name</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Account Created Date</TableCell>
                  <TableCell align="left">Coins Hold</TableCell>
                  <TableCell align="left">Is Active</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {playerData.map((item, x) => {
                  return (
                    <React.Fragment key={x}>
                      <TableRow sx={{ height: "50px" }} hover>
                        <TableCell align="center">
                          <Avatar alt={item.player_name} src="" />
                        </TableCell>
                        <TableCell align="left">{item.player_name}</TableCell>
                        <TableCell align="left">{item.player_number}</TableCell>
                        <TableCell align="left">{item.created_at}</TableCell>
                        <TableCell align="left">{item.coins_hold}</TableCell>
                        <TableCell align="left">{item.is_active}</TableCell>
                        {/* <TableCell align="left">{item.action}</TableCell> */}
                        <TableCell align="center">
                          {/* <IconButton><FileOpenIcon/></IconButton>
                            <IconButton><EditIcon/></IconButton> */}
                          {/* <IconButton><DeleteIcon/></IconButton> */}
                          {/* <IconButton>
                                <DeleteIcon color="error"  />
                              </IconButton> */}
                          <Tooltip title="Mark inactive">
                            <IconButton
                              style={{
                                height: "20px",
                                width: "20px",
                                color: "red",
                              }}
                            >
                              <CancelOutlinedIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={playerData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CardContent>
    </Card>
  );
};
export default PlayerScreen;
