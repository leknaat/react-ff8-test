import React from 'react'
import _ from 'lodash'


export default class UseBy extends React.Component {

  getGF() {
    return _.map(this.props.useBy, (names) => {
      return (<ul><li>{names}</li></ul>)
    }
  )
  }

  render() {
    return (<p><b>GFs:</b> {this.getGF()}</p>)
  }
}
