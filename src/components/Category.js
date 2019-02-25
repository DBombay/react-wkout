import React from 'react'
import {SubCategory} from '../components'
import {Card, CardBody, Collapse, Spinner} from 'reactstrap'

export default class Category extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loading: false,
      subCategories: []
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch(`/categories/${this.props.id}/sub_categories`)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let subCategories = data.map((subCategory) => {
          return (
            <SubCategory
              id={subCategory.id}
              key={subCategory.id}
              name={subCategory.name}
              description={subCategory.description}
              category_id={this.props.id}
            />
          )
        })
        this.setState({subCategories: subCategories, loading: false})
      })
      .catch(e => {
          console.log(e);
          return e
        }
      )
  }

  toggle() {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <Card key={this.props.id} className='container-fluid h-100 bg-light'>
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
            {this.state.loading ? <Spinner style={{ width: '3rem', height: '3rem' }} /> : this.state.subCategories}
          </CardBody>
        </Collapse>
      </Card>
    )
  }
}