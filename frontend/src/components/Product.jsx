import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import bg from "../assets/images/defaultImage.jpg";
import { deleteProduct } from "../api/products";
import Modal from "./Modal";

const Product = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className=" w-64 h-96 rounded-sm bg-slate-200 shadow-md overflow-hidden relative">
      <div className="absolute top-2 right-2 hover:text-red-500 hover:scale-125 hover:cursor-pointer">
        <button
          onClick={() => {
            deleteProduct(product.id);
            window.location.reload();
          }}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
      <img src={bg} alt="bg-image" />
      <h2 className="text-lg font-bold mb-4 text-amber-800 text-center">
        {product.name}
      </h2>
      <div className="flex p-3 justify-between">
        <div className="flex p-4">
          <span className="font-semibold p-1">prix</span>
          <p className="font-bold p-1">{product.price}€</p>
        </div>
        <div className="flex p-4">
          <span className="font-semibold p-1">quantité</span>
          <p className="font-bold p-1">{product.quantity}</p>
        </div>
      </div>
      <button
        className=" absolute bottom-3 right-3 bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600"
        onClick={handleOpenModal}
      >
        edit
      </button>
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal} isUpdate id={product.id} />
      )}
    </div>
  );
};

export default Product;
