import React from "react";

const StoreBooks = (props) => {
  const returnHandle = () => {
    localStorage.removeItem("inStore");
    props.onReturn();
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1 className="text-dark">Store Books</h1>
          <button className="btn btn-dark" onClick={returnHandle}>Return to Main Page</button>
        </div>
      </nav>
    </div>
  );
};

export default StoreBooks;
