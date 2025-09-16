import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateBackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="back-btn">
      ⬅ Back
    </button>
  );
}

export default NavigateBackButton;
