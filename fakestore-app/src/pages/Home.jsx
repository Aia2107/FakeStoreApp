import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1>Welcome to the FakeStore</h1>
      <p>Your place for mock e-commerce practice</p>
      <Button onClick={() => navigate("/products")}>Shop Now</Button>
    </div>
  );
};

export default Home;
