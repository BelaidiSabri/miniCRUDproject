import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setIsUpdateMode(false);
    setSelectedProduct(null);
  };

  const handleOpenUpdateModal = (product) => {
    setIsModalOpen(true);
    setIsUpdateMode(true);
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar handleOpenModal={handleOpenModal} />
      <ProductList handleOpenUpdateModal={handleOpenUpdateModal} />
      {isModalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          isUpdate={isUpdateMode}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default Home;
