import FormFilter from "./FormFilter";
import { useState } from "react";
let show_the_form = "0";
const MyButton = () => {
  const [variable, setVariable] = useState();
  const formFunction = (event) => {
    if (show_the_form == "0") {
      setVariable(<FormFilter />);
      show_the_form = "1";
    } else {
      setVariable();
      show_the_form = "0";
    }
  };
  return (
    <div className="container">
      <div className="Mybtn">
        <button type="button" class="btn btn-primary" onClick={formFunction}>
          Filter
        </button>
        <br />
        {variable}
      </div>
    </div>
  );
};
export default MyButton;
