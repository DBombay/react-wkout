import React from 'react'
import {Category} from '../components'

export default class CategoriesCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/categories/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let categories = data.map((category) => {
          return (
            <Category id={category.id} key={category.id} name={category.name} description={category.description}/>
          )
        })
        this.setState({categories: categories})
      })
      .catch(e =>{
        console.log(e);
        return e
      })
  }

  render() {
    return (
      <div className='container'>
        {this.state.categories}
      </div>
    )
  }
}

