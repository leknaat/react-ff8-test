import React from 'react'
import _ from 'lodash'


export default class UseBy extends React.Component {


  render() {
    return (
      <div>
        {_.map(this.props.useBy, (name) => {
          <p>{name}</p>
        }
      )}
      </div>)
  }
}
