import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from './../products'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
           <Row>
               {products.map(product=>(
                   <Col sm={12} md={16} lg={4}>
                   <h3>{product.name}</h3>
               </Col>
               ))}
           </Row>
                
        </>
    )
}

export default HomeScreen
