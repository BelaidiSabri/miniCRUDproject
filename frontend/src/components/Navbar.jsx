import React from "react";

const Navbar = ({ handleOpenModal }) => {
  return (
    <div className="w-full bg-gray-800 p-4 flex justify-end">
      <button
        className="py-1 px-2 bg-slate-50 text-base font-semibold border text-gray-800 rounded-md hover:bg-gray-800 hover:border hover:border-white hover:text-slate-50"
        onClick={handleOpenModal}
      >
        Ajouter un Produit
      </button>
    </div>
  );
};

export default Navbar;
