import React from 'react'
import {Card, CardBody, Badge, Button, ButtonGroup} from 'reactstrap'

export default function Product(props) {
  return (
    <Card key={props.id} className='col-4 mx-1 my-2 container-fluid'>
      <CardBody>
        <div className="row">
          <h3 className='float-left col-10'>{props.name}</h3>
          {props.onSale &&
          <div className="col-2">
            <Badge color="info" pill>-{(1 - props.salePrice).toFixed(2) * 100}%</Badge>
          </div>
          }
        </div>

        <img src={props.image} alt={`A picture of a ${props.name}`} className='img-thumbnail w-100'/>

        <div className="row">
          <strong>Price:</strong>
          <p>${props.price}</p>
        </div>

        <p>{props.description}</p>
        <ButtonGroup>
          <Button color="primary">Edit</Button>
          <Button color="warning">De-Activate</Button>
          <Button color="danger">Delete</Button>
        </ButtonGroup>
      </CardBody>
    </Card>
  )
}