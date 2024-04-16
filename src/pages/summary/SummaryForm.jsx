import { useState } from "react";
import { Popover } from "react-bootstrap";

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState("none");
  return (
    <div>
      <h1>SummaryForm</h1>
      <form>
        <input
          type="checkbox"
          id="terms"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label
          htmlFor="terms"
          onMouseEnter={() => setShow("block")}
          onMouseLeave={() => setShow("none")}
        >
          terms and conditions
        </label>
        <div
          style={{
            height: 120,
            color: "black",
            position: "absolute",
            left: 190,
            top: 110,
            display: show,
          }}
        >
          <Popover id="popover-basic" placement="right" title="Popover right">
            No ice cream will be actually delivered
          </Popover>
        </div>
        <br />
        <button disabled={!checked} onClick={(e) => e.preventDefault()}>
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default SummaryForm;
