import React from 'react'
import _ from 'lodash'


export default class UseBy extends React.Component {

  getGF() {
    return _.map(this.props.useBy, (names) => {
      return (<li>{names}</li>)
    })
  }

  render() {
    return (<p><b>GFs:</b> <ul>{this.getGF()}</ul></p>)
  }
}
