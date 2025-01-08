import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <b>{product.name}</b>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} of {product.numReviews} Reviews
            <Rating value={product.rating} text = {`${product.numReviews} reviews`} color="#f8e825"/>
          </div>
        </Card.Text>
        {/* as h3 will make the content as header 3 */}
        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
