import React from "react";
import "../products.css";
import ProductCard from "./ProductCard";
const EditCard = ({ data }) => {
  return (
    <>
      {/* with the help of map function we can show the every product card to the browser */}
      <div className="edit-card">
        {data.length !== 0 ? (
          data.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <ProductCard data={data} />
              </React.Fragment>
            );
          })
        ) : (
          <>
            <div class="progress">
              <div class="indeterminate"></div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditCard;
