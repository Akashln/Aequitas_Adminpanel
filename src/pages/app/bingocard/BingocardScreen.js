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
import { bingocardData } from "./bingocard.service";

  const BingocardScreen = ({
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    onClickAddBingocardBtn,
     onClickViewBtn,
     setEditBingocard,
      onClickEditBtn,
  }) => {
    return (
      <Card variant="outlined">
        <Box p={2} display="flex" alignItems="center">
          <Typography color="#212121" variant="h6" mr={2}>
            Bingocard Details
          </Typography>
          <Button 
          color="primary" 
          variant="contained"
          onClick={onClickAddBingocardBtn}
          >
            Add Bingocard
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
                    <TableCell align="left">Card Number</TableCell>
                    <TableCell align="left">Is Sold</TableCell>
                    <TableCell align="left">Owned By</TableCell>
                    <TableCell align="left">Link</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bingocardData.map((item, x) => {
                    return (
                      <React.Fragment key={x}>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="center">
                            <Avatar alt={item.bingocard_name} src="" />
                          </TableCell>
                          <TableCell align="left">{item.card_number}</TableCell>
                          <TableCell align="left">{item.is_sold}</TableCell>
                          <TableCell align="left">{item.owned_by}</TableCell>
                          <TableCell align="left">{item.link}</TableCell>
                          
                          <TableCell align="center">
                            <IconButton onClick={()=>onClickViewBtn(item)}>
                            <FileOpenIcon/>
                            </IconButton>
                            <IconButton onClick={()=>onClickEditBtn(item)}>
                            <EditIcon/>
                            </IconButton>
                            <IconButton><DeleteIcon color="error"/></IconButton>
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
              count={bingocardData.length}
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
  
  export default BingocardScreen;
  