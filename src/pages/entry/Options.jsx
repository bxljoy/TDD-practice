import axios from "axios";
import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import AlertBanner from "../common/AlertBanner";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  // optionType is either an 'scoops' or 'toppings' option
  const endPoint = optionType === "scoops" ? "scoops" : "toppings";
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${endPoint}`)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, [endPoint]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
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
