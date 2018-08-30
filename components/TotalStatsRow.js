import React from 'react'
import { Text, View } from 'react-native'

const TotalStatsRow = (props) => {
  const { styles, label, stat } = props
  const { smallStats, centerVertically, statLabel, largeStats, spaceElements } = styles
  const statStyle = label === 'Total Miles' ? largeStats : smallStats
  return (
    <View style={[centerVertically, spaceElements]}>
      <Text style={statStyle}>{stat}</Text>
      <Text style={statLabel}>{label}</Text>
    </View>
  )
}

export default TotalStatsRow
