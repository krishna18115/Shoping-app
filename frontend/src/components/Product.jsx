import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import{Link} from 'react-router-dom'

const Product = ({product}) => {
  return (
    <>
    <Card className='my-3 p-3 rounded '>
        <Link to={`/Product/${product._id}`}>
              <Card.Img src={product.image} className="img" variant='top'/>
        </Link>
        <Card.Body>
        <Link to={`/Product/${product._id}`}>
              <Card.Title as='div'>
                <strong>
                    {product.name}
                </strong>
              </Card.Title>
        </Link>
        </Card.Body>
        <Card.Text as='div'>
            <div className='my-3'>
               <Rating value={product.rating} text={`${product.numReviews}reviews`}/>
            </div>
        </Card.Text>
        <Card.Text as='h3'>
            {product.price}
        </Card.Text>
    </Card>
    </>
  )
}

export default Product
