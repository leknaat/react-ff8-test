import React from 'react'
import Ability from '../junctionAbility/ability.js'
import _ from 'lodash'

export default class JunctionAbilities extends React.Component {


  render(){
    return (
      <div>
        {_.map(this.props.abilities, (ability) => {
          return (
            <Ability name={ability.name} cost={ability.cost} effect={ability.effect} useBy={ability.useBy} />
          )
        })}
      </div>
    )
  }
}
