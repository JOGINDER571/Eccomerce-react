//making a separate component for the rating
import React from "react";
import Rating from "@mui/material/Rating";
import './rating.css';
const Ratings = ({value}) => {
  return <Rating  value={value ? value : 0} />;
};

export default Ratings;
