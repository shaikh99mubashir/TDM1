import React from "react";
import './TextInput.css'
const TextInput = ({label, placeHolder, backgroundColor}) => {
  return (
    <div className="d-flex flex-column w-100">
    {label &&
      <label className="TextInputLabel roboto-medium">{label}</label>
    }
      <input type="email" placeholder={placeHolder}
       className="form-control TextInput roboto-medium" style={{ color:'#54595F',backgroundColor: backgroundColor ? backgroundColor :'#FFF' }} />
    </div>
  );
};

export default TextInput;
