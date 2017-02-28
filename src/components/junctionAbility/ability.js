import React from 'react'

export default class Ability extends React.Component {


  render(){
    return(
      <div>
        <div><p>Name: {this.props.name}</p></div>
        <div><p>Cost: {this.props.cost}</p></div>
        <div><p>Effect: {this.props.effect}</p></div>
        <div><p>GFs: {this.props.useBy}</p></div>
      </div>
    )
  }
}
