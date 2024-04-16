import Col from "react-bootstrap/Col";

const ScoopOption = ({ name, imageimagePath }) => {
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http://lcoalhost:3030/${imageimagePath}`}
        alt={`${name} scoop`}
      />
    </Col>
  );
};

export default ScoopOption;
