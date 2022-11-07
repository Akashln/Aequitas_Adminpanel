import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GameForm from './GameForm';
import GameScreen from './GameScreen';

const Game = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [Time, setTime] = useState("");
  const [duration,setDuration] = useState("");
  const [winin, setWinin] = useState("");
  const [winout,setWinout] = useState("");
  const [winningNo,setWinningNo] = useState("");
  const [editGame, setEditGame] = useState({ isEditing: false, editItem: null });

  const navigate= useNavigate();
  const handleChangePage = (event, newPage) => {
    // setSearchVideo("");
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    // setSearchVideo("");
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const onClickAddGameBtn = () => {
    setEditGame({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit game from onclicknew", editGame);
  };

  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };
  const onChangeWinin = (e) => {
    setWinin(e.target.value);
  };
  const onChangeWinout = (e) => {
    setWinout(e.target.value);
  };
  const onChangeWinningNo = (e) => {
    setWinningNo(e.target.value);
  };


  const onDiscard = () => {
    setTime("");
    setDuration("");
    setWinin("");
    setWinout("");
    setWinningNo("");
    setEditGame("");
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

  const onClickViewBtn = (editGameData) => {
    console.log('data coming for editing', editGameData)
    setEditGame({ isEditing: false, editItem: editGameData });
    //setCurrentScreen(2)
    navigate(`/game/${editGameData.game_id}`);
  };

  const onClickEditBtn = (editGameData) => {
    //console.log('data coming for editing', editGameData)
    setEditGame({ isEditing: true, editItem: editGameData });
    setCurrentScreen(1);
  };
  return (
    <>
     {currentScreen === 0 && (
     <GameScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onClickAddGameBtn={onClickAddGameBtn}
          onClickViewBtn={onClickViewBtn}
          setEditGame={ setEditGame}
          onClickEditBtn={onClickEditBtn}
      />
      )}
      {currentScreen === 1 && (
        <GameForm 
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          editGame={editGame}
          onChangeTime={onChangeTime}
          onChangeDuration={onChangeDuration}
          onChangeWinin={onChangeWinin}
          onChangeWinout={onChangeWinout}
          onChangeWinningNo={onChangeWinningNo}


        />
      )}
    </>
  );
};

export default Game;