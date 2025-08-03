import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Button, Spinner, Alert, Modal } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to fetch product details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);


  const handleDelete = () => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        setShowConfirm(false);
        navigate("/products");
      })
      .catch(() => setError("Failed to delete product"));
  };

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!product) return null;

  return (
    <Card>
      <Card.Img
        variant="top"
        src={product.image}
        height="300"
        style={{ objectFit: "contain" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          <strong>Category:</strong> {product.category}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {product.description}
        </Card.Text>
        <Card.Text>
          <strong>Price:</strong> ${product.price}
        </Card.Text>
        <Button
          variant="danger"
          onClick={() => setShowConfirm(true)}
          className="me-2"
        >
          Delete
        </Button>
        <Button
          variant="secondary"
          onClick={() => navigate(`/edit-product/${product.id}`)}
        >
          Edit
        </Button>
      </Card.Body>

      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default ProductDetails;
