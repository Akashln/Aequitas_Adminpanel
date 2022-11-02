import React, { useState } from "react";
import BingocardScreen from "./BingocardScreen";
import { useNavigate } from "react-router-dom";
import BingocardForm from "./BingocardForm";

const Bingocard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [cardNumber,setCardNumber] = useState("");
  const [isSold,setIsSold] = useState("");
  const [ownedBy,setOwnedBy] = useState("");
  const [link,setLink] = useState("");
  const [editBingocard, setEditBingocard] = useState({ isEditing: false, editItem: null });


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

  const onClickAddBingocardBtn = () => {
    setEditBingocard({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit bingocard from onclicknew", editBingocard);
  };
  
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };

  const onChangeCardNumber = (e) => {
    setCardNumber(e.target.value);
  };
  const onChangeIsSold = (e) => {
    setIsSold(e.target.value);
  };
  const onChangeOwnedBy = (e) => {
    setOwnedBy(e.target.value);
  };
  const onChangeLink = (e) => {
    setLink(e.target.value);
  };

  const onDiscard = () => {
    setCardNumber("");
    setIsSold("");
    setOwnedBy("");
    setLink("");
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
  const onClickViewBtn = (editBingocardData) => {
    console.log('data coming for editing', editBingocardData)
    setEditBingocard({ isEditing: false, editItem: editBingocardData });
    //setCurrentScreen(2)
    navigate(`/bingocard/${editBingocardData.bingocard_id}`);
  };

  const onClickEditBtn = (editBingocardData) => {
    //console.log('data coming for editing', editBingocardData)
    setEditBingocard({ isEditing: true, editItem: editBingocardData });
    setCurrentScreen(1);
  };

  return (
    <>
      {currentScreen === 0 && (
      <BingocardScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onClickAddBingocardBtn={onClickAddBingocardBtn}
          onClickViewBtn={onClickViewBtn}
          setEditBingocard={ setEditBingocard}
          onClickEditBtn={onClickEditBtn}
      />
      )}
      {currentScreen === 1 && (
        <BingocardForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          editBingocard={editBingocard}
          onChangeCardNumber={onChangeCardNumber}
          onChangeIsSold={onChangeIsSold}
          onChangeOwnedBy={onChangeOwnedBy}
          onChangeLink={onChangeLink}
          onChangeEditBingocard={onChangeEditBingocard}
          cardNumber={cardNumber}
          isSold={isSold}
          ownedBy={ownedBy}
          link={link}
        
        />
      )}
    </>
  );
};

export default Bingocard;
