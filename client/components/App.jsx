import React from 'react'
import {getLocations} from '../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: []
    }
    //this.getSights()
  }

  getSights () {
    getLocations()
    .then(res => {
      this.setState({
        locations: res.body
      })
    })
  }

  render () {
    //console.log(this.state.locations)
    return (
      <div>
        <h1>My Local</h1>
      </div>
    )
  }
}

export default App
