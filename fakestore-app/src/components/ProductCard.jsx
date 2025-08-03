import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <Card>
    <Card.Img
      variant="top"
      src={product.image}
      height="200"
      style={{ objectFit: "contain" }}
    />
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>${product.price}</Card.Text>
      <Button as={Link} to={`/products/${product.id}`} variant="primary">
        View Details
      </Button>
    </Card.Body>
  </Card>
);

export default ProductCard;
