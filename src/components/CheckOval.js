import React from "react";
import { CheckBoxContainer } from "../styles/index";

function CheckOval({ factor, register }) {
  return (
    <CheckBoxContainer>
      <label>
        <input
          type="checkbox"
          value=""
          placeholder={factor}
          name={factor}
          ref={register}
        />
        <span>{factor}</span>
      </label>
    </CheckBoxContainer>
  );
}

export default CheckOval;
