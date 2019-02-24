import React from 'react'
import {Card, CardBody} from 'reactstrap'

export default function Product(props) {
    return (
      <Card key={props.id} className='container-fluid h-100 bg-light my-2'>
        <CardBody className="row h-100 align-items-center">
          <h2 className="col-7 float-left">{props.name}</h2>
          <div className="col-5 float-right">
            <em>{props.description}</em>
          </div>
        </CardBody>
      </Card>
    )
}