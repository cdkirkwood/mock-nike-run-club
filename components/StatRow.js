import React from 'react'
import { Text, View } from 'react-native'

const StatRow = (props) => {
  const { styles, label, stat } = props
  const { smallStats, centerVertically, statLabel, largeStats } = styles
  const statStyle = label === 'Total Miles' ? largeStats : smallStats
  return (
    <View style={centerVertically}>
      <Text style={statStyle}>{stat}</Text>
      <Text style={statLabel}>{label}</Text>
    </View>
  )
}

export default StatRow