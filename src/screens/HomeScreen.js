import React from "react";
import { Row, Col } from "react-bootstrap";
import products_list from "../products";
import Product from "../components/Product";


const HomeScreen = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products_list.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product = {product}/>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
