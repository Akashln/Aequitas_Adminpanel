import React, { useState } from "react";
import ItemScreen from "./ItemScreen";
import { useNavigate } from "react-router-dom";
import ItemForm from "./ItemForm";

const Item = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [itemsName, setItemsName] = useState("");
  const [itemsDescription, setItemsDescription] = useState("");
  const [itemsPrice,setItemsPrice] = useState("");
  const [itemsqty,setItemsQty] = useState("");
  const [itemscategory,setItemsCategory] = useState("");
  const [itemsPurchasetype,setItemsPurchasetype]= useState("");
  const [editItems, setEditItems] = useState({ isEditing: false, editItems: null });

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
  const onClickAddItemsBtn = () => {
    setEditItems({ isEditing: false, editItem: null });
    onDiscard();
    setCurrentScreen(1);
    console.log("edit item from onclicknew", editItems);
  };
  const onClickBack = () => {
    onDiscard();
    setCurrentScreen(0);
  };
  const onChangeItemsName = (e) => {
    setItemsName(e.target.value);
  };
  const onChangeItemsDescription = (e) => {
    setItemsDescription(e.target.value);
  };
  const onChangeItemsPrice = (e) => {
    setItemsPrice(e.target.value);
  };
  const onChangeItemsQty = (e) => {
    setItemsQty(e.target.value);
  };
  const onChangeItemsCategory = (e) => {
    setItemsCategory(e.target.value);
  };
  const onChangeItemsPurchasetype = (e) => {
    setItemsPurchasetype(e.target.value);
  }
  const onDiscard = () => {
    setItemsName("");
    setItemsDescription("");
    setItemsPrice("");
    setItemsQty("");
    setItemsCategory("");


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
  const onClickViewBtn = (editItemData) => {
    console.log('data coming for editing', editItemData)
    setEditItems({ isEditing: false, editItem: editItemData });
    //setCurrentScreen(2)
    navigate(`/wallet/${editItemData.item_id}`);
  };
  const onClickEditBtn = (editItemData) => {
    //console.log('data coming for editing', editUserData)
    setEditItems({ isEditing: true, editItem: editItemData });
    setCurrentScreen(1);
  };
  return (
    <>
      {currentScreen === 0 && (
      <ItemScreen
        page={page}
        rowsPerPage={rowsPerPage}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        onClickAddItemsBtn={onClickAddItemsBtn}
          onClickViewBtn={onClickViewBtn}
          setEditItems={ setEditItems}
          onClickEditBtn={onClickEditBtn}
      />
      )}
      {currentScreen === 1 && (
        <ItemForm
          onClickBack={onClickBack}
          onSubmit={onSubmit}
          onUpdate={onUpdate}
          onDiscard={onDiscard}
          editWallet={editItems}
          onChangeItemsName={onChangeItemsName}
          onChangeItemsDescription={onChangeItemsDescription}
          onChangeItemsPrice={onChangeItemsPrice}
          onChangeItemsQty={onChangeItemsQty}
          onChangeItemsCategory={onChangeItemsCategory}
          onChangeItemsPurchasetype={onChangeItemsPurchasetype}
        />
      )}
    </>
  );
};

export default Item;
