import React, { useState } from "react";
import QuestionScreen from "./QuestionScreen";
import { useNavigate } from "react-router-dom";
import QuestionForm from "./QuestionForm";
const Question = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [Title , setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [isused, setIsused] = useState('');
  const [answerdetails, setAnswerdetails] = useState('');
  const [editQuestion, setEditQuestion] = useState({ isEditing: false, editItem: null });
  

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
  const onClickAddQuestionBtn = () => {
    setEditQuestion({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit question from onclicknew", editQuestion);
  };

  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeCategory = (e) => {
    setCategory(e.target.value);
  };
  const onChangeIsused = (e) => {
    setIsused(e.target.value);
  };
  const onChangeAnswerdetails = (e) => {
    setAnswerdetails(e.target.value);
  };
  const onChangeEditQuestion = (e) => {
    setEditQuestion(e.target.value);
  };
 
  
  const onDiscard = () => {
    setTitle("");
    setCategory("");
    setIsused("");
    setAnswerdetails("");
    setEditQuestion("");
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
  const onClickViewBtn = (editQuestionData) => {
    console.log('data coming for editing', editQuestionData)
    setEditQuestion({ isEditing: false, editItem: editQuestionData });
    //setCurrentScreen(2)
    navigate(`/question/${editQuestionData.question_id}`);
  };

  const onClickEditBtn = (editQuestionData) => {
    //console.log('data coming for editing', editQuestionData)
    setEditQuestion({ isEditing: true, editItem: editQuestionData });
    setCurrentScreen(1);
  };
  return (
    <>
    {currentScreen === 0 && (
      <QuestionScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onClickAddQuestionBtn={onClickAddQuestionBtn}
          onClickViewBtn={onClickViewBtn}
          setEditQuestion={ setEditQuestion}
          onClickEditBtn={onClickEditBtn}
      />
     )}
     {currentScreen === 1 && (
        <QuestionForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          editQuestion={editQuestion}
          onChangeTitle={onChangeTitle}
          onChangeCategory={onChangeCategory}
          onChangeIsused={onChangeIsused}
          onChangeAnswerdetails={onChangeAnswerdetails}
          onChangeEditQuestion={onChangeEditQuestion}
          Title={Title}
          category={category}
          isused={isused}
          answerdetails={answerdetails}
        
        />
      )}
    </>
  );
};

export default Question;
