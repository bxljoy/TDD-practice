import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  // optionType is either an 'scoops' or 'toppings' option
  useEffect(() => {
    axios
      .get("http://localhost:3030/scoops")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : null;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
