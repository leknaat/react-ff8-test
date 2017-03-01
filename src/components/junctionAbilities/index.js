import React from 'react'
import _ from 'lodash'
import Ability from '../junctionAbility/ability.js'


export default class JunctionAbilities extends React.Component {

  printAbilities() {
    return _.map(this.props.abilities, (ability) => {
      return (
        <Ability name={ability.name} cost={ability.cost} effect={ability.effect} useBy={ability.useBy} />
      )
    })
  }

  render() {
    return (
      <div>
        {this.printAbilities()}
      </div>
    )
  }
}
