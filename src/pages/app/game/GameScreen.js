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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography,
  } from "@mui/material";
  import React from "react";
  import FileOpenIcon from '@mui/icons-material/FileOpen';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
import { gameData } from "./game.service";
  const GameScreen = ({
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  }) => {
    return (
      <Card variant="outlined">
        <Box p={2} display="flex" alignItems="center">
          <Typography color="#212121" variant="h6" mr={2}>
            Game Page
          </Typography>
          <Button color="primary" variant="contained">
            Add Games
          </Button>
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
            <TableContainer style={{ maxHeight: "400px" }} className="scrollbar" >
              <Table stickyHeader aria-label="sticky table" size="small" >
                <TableHead>
                  <TableRow style={{ fontWeight: "bold" }}>
                    <TableCell align="left">Image</TableCell>
                    <TableCell align="left">Game Date</TableCell>
                    <TableCell align="left">Game Time</TableCell>
                    <TableCell align="left">Start Simulation</TableCell>
                    <TableCell align="left">Winning No</TableCell>
                    <TableCell align="left">Total Cards Generated</TableCell>
                    <TableCell align="left">Total winning Cards</TableCell>
                    <TableCell align="left">Win Ratio</TableCell>
                    <TableCell align="left">Is Running</TableCell>
                    <TableCell align="left">Game End At</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gameData.map((item, x) => {
                    return (
                      <React.Fragment key={x}>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="center">
                            <Avatar alt={item.game_name} src="" />
                          </TableCell>
                          <TableCell align="left">{item.game_date}</TableCell>
                          <TableCell align="left">{item.game_time}</TableCell>
                          <TableCell align="left">{item.game_simulation}</TableCell>
                          <TableCell align="left">{item.winning_no}</TableCell>
                          <TableCell align="left">{item.total_card_generated}</TableCell>
                          <TableCell align="left">{item.total_winning_card}</TableCell>
                          <TableCell align="left">{item.win_ratio}</TableCell>
                          <TableCell align="left">{item.isRunning}</TableCell>
                          <TableCell align="left">{item.game_end_date}</TableCell>
                          <TableCell align="center">
                          <Box display='flex'>
                          <IconButton><FileOpenIcon/></IconButton>
                            <IconButton><EditIcon/></IconButton>
                            <IconButton><DeleteIcon/></IconButton>
                          </Box>
                            
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
              count={gameData.length}
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
  
  export default GameScreen;
  