import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./NewColorForm.css";

function NewColorForm({addColor}) {

  const [form, updateForm] = useState({name: "", hex: "#ffffff"});
  const Navigate = useNavigate();

  function handleChange(evt) {
    evt.persist();
    updateForm(f => ({ ...f, [evt.target.name]: evt.target.value }))
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    addColor({ [form.name]: form.hex });
    Navigate("../colors")
  }

  const {hex, name} = form;

  return (
    <div className="newColorForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Color name</label>
          <input
            name="name"
            id="name"
            placeholder="Enter a color name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="hex">Color value hex</label>
          <input
            type="color"
            name="hex"
            id="hex"
            onChange={handleChange}
            value={hex}
          />
        </div>
        <input type="submit" value="Add this color" readOnly/>
      </form>
    </div>
  );
};

export default NewColorForm;