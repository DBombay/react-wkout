import React from 'react'
import {Product} from '../components'
import {Card, CardBody, Collapse} from 'reactstrap'

export default class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      products: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:5000/categories/${this.props.category_id}/sub_categories/${this.props.id}/products`)
      .then(
        results => {
          return results.json();
        }
      )
      .then(data => {
        let products = data.map((product) => {
          if (product.active) {
            return (
              <Product
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                salePrice={product.sale_price}
                description={product.description}
                image={product.product_image}
                onSale={product.on_sale}
              />
            )
          }
      })
        this.setState({products: products})
      })
      .catch(e => {
        console.log(e)
        return e
      })
  }

  toggle() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <Card key={this.props.id} className='container-fluid h-100 bg-light my-2'>
        <CardBody className="row h-100 align-items-center" onClick={this.toggle}>
          <h2 className="col-7 float-left">{this.props.name}</h2>
          <div className="col-5 float-right">
            <em>{this.props.description}</em>
            <span
              className={`fa fa-lg ${this.state.menuOpen ? 'fa-caret-down' : 'fa-caret-left'} float-right align-self-center`}/>
          </div>
        </CardBody>
        <Collapse isOpen={this.state.menuOpen}>
          <hr className="my-2"/>
          <CardBody>
            <div className="row align-items-center justify-content-start">
              {this.state.products}
            </div>
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}