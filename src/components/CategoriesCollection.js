import React from 'react'
import {Spinner} from 'reactstrap'
import {Category} from '../components'

export default class CategoriesCollection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch("categories/")
      .then(results => {
        return results.json();
      })
      .then(data => {
        let categories = data.map((category) => {
          return (
            <Category id={category.id} key={category.id} name={category.name} description={category.description}/>
          )
        })
        this.setState({categories: categories, loading: false})
      })
      .catch(e =>{
        console.log(e);
        return e
      })
  }

  render() {
    return (
      <div className='container'>
        {this.state.loading ? <Spinner style={{ width: '3rem', height: '3rem' }} /> : this.state.categories}
      </div>
    )
  }
}

