import React from 'react'
import UseBy from './useby.js'

export default class Ability extends React.Component {

  render() {
    return (
      <div>
        <div><p><b>Name</b>: {this.props.name}</p></div>
        <div><p><b>Cost</b>: {this.props.cost}</p></div>
        <div><p><b>Effect</b>: {this.props.effect}</p></div>
        <div><UseBy useBy={this.props.useBy} /></div>
      </div>
    )
  }
}
