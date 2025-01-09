import React from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap'
import Rating from '../components/Rating';
import products_list from '../products';
import { useParams } from 'react-router-dom';


const ProductScreen = () => {
  const { id } = useParams();
  // Find the product based on the id passed from router in App.js
  const product = products_list.find((p)=> p._id == id)
  return (
    <div>
      {/* Button to go back to home page */}
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        {/* Dividing row into 3 cols: 6 width 3 width and 3 width */}
        {/* First col to display Image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>

        {/* 2nd Col to display product information */}
        <Col md={3}>
        {/* ListGroup is used to display list items */}
        {/* Variant will eliminate the table outline */}
          <ListGroup variant='flush'>
            {/* List Group Item is to display each list item */}
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>

            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'}/>
            </ListGroupItem>

            <ListGroupItem>
              Price: ${product.price}
            </ListGroupItem>

            <ListGroupItem>
              Descrition: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>

        {/* 3rd Column To display Price and Add to Card button */}
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                {/* Row is created so text price and its value display beside */}
                <Row>
                  <Col>Price:</Col>
                  <Col><strong>${product.price}</strong></Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  {/* Conditional display based on stock value */}
                  <Col>{product.countInStock>0 ? 'In stock': 'Out of Stock'}</Col>
                </Row>
              </ListGroupItem>

              <ListGroupItem>
                {/* Disable button based on stock value */}
                <Button className='w-100' disabled={product.countInStock <= 0}>
                  Add to cart
                </Button>
              </ListGroupItem>

            </ListGroup>
          </Card>
        </Col>

      </Row>
    </div>
  )
}

export default ProductScreen;
