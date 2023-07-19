import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [refreshproducts, setRefreshProducts] = useState(false);


  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsUpdateMode(false);
  };

  const handleOpenUpdateModal = () => {
    setIsModalOpen(true);
    setIsUpdateMode(true);
  };

  const refresh = ()=> {
    setRefreshProducts(!refreshproducts)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    refresh()
  };


  return (
    <div>
      <Navbar handleOpenModal={handleOpenModal} />
      <ProductList handleOpenUpdateModal={handleOpenUpdateModal} refresh={refresh} refreshproducts={refreshproducts} />
      {isModalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          isUpdate={isUpdateMode}
        />
      )}
    </div>
  );
};

export default Home;
