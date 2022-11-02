import React, { useState } from "react";
import WalletScreen from "./WalletScreen";
import WalletForm from "./walletForm";
import ViewWallet from "./viewWallet";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [walletAmount, setWalletAmount] = useState("");
  const [walletDetails, setWalletDetails] = useState("");
  const [editWallet, setEditWallet] = useState({ isEditing: false, editItem: null });

  const navigate =useNavigate();
  const handleChangePage = (event, newPage) => {
    // setSearchVideo("");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // setSearchVideo("");
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const onClickAddWalletBtn = () => {
    setEditWallet({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit user from onclicknew", editWallet);
  };

  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeWalletAmount = (e) => {
    setWalletAmount(e.target.value);
  };
  const onChangeWalletDetails = (e) => {
    setWalletDetails(e.target.value);
  };

  const onDiscard = () => {
    setWalletAmount("");
    setWalletDetails("");
  };
  const onValidate = () => {};
  const onUpdate = async (id) => {
    if (onValidate()) {
    }
  };

  const onSubmit = async () => {
    console.log("onSubmit called", onValidate());
    if (onValidate()) {
      const data = {};
    }
  };
  const onClickViewBtn = (editWalletData) => {
    console.log('data coming for editing', editWalletData)
    setEditWallet({ isEditing: false, editItem: editWalletData });
    //setCurrentScreen(2)
    navigate(`/wallet/${editWalletData.wallet_id}`);
  };

  const onClickEditBtn = (editWalletData) => {
    //console.log('data coming for editing', editUserData)
    setEditWallet({ isEditing: true, editItem: editWalletData });
    setCurrentScreen(1);
  };
  return (
    <>
      {currentScreen === 0 && (
        <WalletScreen
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          onClickAddWalletBtn={onClickAddWalletBtn}
          onClickViewBtn={onClickViewBtn}
          setEditWallet={ setEditWallet}
          onClickEditBtn={onClickEditBtn}
        />
      )}
      {currentScreen === 1 && (
        <WalletForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          editWallet={editWallet}
          //onClickAddWalletBtn={onClickAddWalletBtn}
          onChangeWalletAmount={onChangeWalletAmount}
          onChangeWalletDetails={onChangeWalletDetails}
          walletAmount={walletAmount}
          walletDetails={walletDetails}
        />
      )}
     
    </>
  );
};

export default Wallet;
