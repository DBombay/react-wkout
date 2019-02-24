import React from 'react';
import HomeContainer from "./containers/HomeContainer.js";
import {HomeNav} from "./components"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <HomeNav/>
        <HomeContainer/>
      </div>
    )
  }
}