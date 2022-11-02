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
import { itemsData } from "./item.service";
  const ItemScreen = ({
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    onClickAddItemsBtn,
    onClickViewBtn,
    setEditItems,
    onClickEditBtn,
  }) => {
     console.log("onClickAddItemsBtn",onClickAddItemsBtn);
    return (
      <Card variant="outlined">
        <Box p={2} display="flex" alignItems="center">
          <Typography color="#212121" variant="h6" mr={2}>
            Item Details
          </Typography>
          <Button
           color="primary"
            variant="contained"
            onClick={onClickAddItemsBtn}
            >
            Add Items
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
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">Qty</TableCell>
                    <TableCell align="left">Category</TableCell>
                    <TableCell align="left">Purchase Type</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {itemsData.map((item, x) => {
                    return (
                      <React.Fragment key={x}>
                        <TableRow sx={{ height: "50px" }}  hover>
                          <TableCell align="center">
                            <Avatar alt={item.items_name} src="" />
                          </TableCell>
                          <TableCell align="left">{item.items_name}</TableCell>
                          <TableCell align="left">{item.items_description}</TableCell>
                          <TableCell align="left">{item.items_price}</TableCell>
                          <TableCell align="left">{item.items_qty}</TableCell>
                          <TableCell align="left">{item.items_category}</TableCell>
                          <TableCell align="left">{item.items_purchasetype}</TableCell>


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
              count={itemsData.length}
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
  
  export default ItemScreen;
  