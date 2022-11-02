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
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { walletData } from "./wallet.service";

const WalletScreen = ({
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  onClickAddWalletBtn,
  onClickViewBtn,
  setEditWallet,
  onClickEditBtn,
}) => {
  console.log("onClickAddWalletBtn", onClickAddWalletBtn);
  return (
    <Card variant="outlined">
      <Box p={2} display="flex" alignItems="center">
        <Typography color="#212121" variant="h6" mr={2}>
          Wallet Page
        </Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={onClickAddWalletBtn}
        >
          Add Wallet
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
          <TableContainer style={{ maxHeight: "400px" }} className="scrollbar">
            <Table stickyHeader aria-label="sticky table" size="small">
              <TableHead>
                <TableRow style={{ fontWeight: "bold" }}>
                  <TableCell align="left">Image</TableCell>
                  <TableCell align="left">Wallet Amount</TableCell>
                  <TableCell align="left">Wallet Details</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {walletData.map((item, x) => {
                  return (
                    <React.Fragment key={x}>
                      <TableRow sx={{ height: "50px" }} hover>
                        <TableCell align="center">
                          <Avatar alt={item.wallet_name} src="" />
                        </TableCell>
                        <TableCell align="left">{item.wallet_amount}</TableCell>

                        <TableCell align="left">
                          {item.wallet_details}
                        </TableCell>

                        <TableCell align="center">
                          <IconButton onClick={()=>onClickViewBtn(item)}>
                            <FileOpenIcon />
                          </IconButton>
                          <IconButton onClick={()=>onClickEditBtn(item)}>
                            <EditIcon/>
                          </IconButton>
                          <IconButton>
                            <DeleteIcon color="error" />
                          </IconButton>
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
            count={walletData.length}
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

export default WalletScreen;
