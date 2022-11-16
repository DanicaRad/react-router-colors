import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./Color.css";

function Color({getHex}) {
  const { color } = useParams();
  const hex = getHex(color);

  if(!hex) return <Navigate to="../colors" replace={true} />;

  return (
    <div className="color" style={{ backgroundColor: hex }}>
      <h3>This is the color {color}</h3>
      <button>
        <Link to="/colors">Go Back</Link>
      </button>
    </div>
  )
}

export default Color;