import React from 'react'
import { View, Text } from 'react-native'

const MonthStats = props => {
  const { stats, styles } = props
  const { totalRuns, avgPace, totalMiles } = stats
  return (
    <View style={styles}>
      <Text>{totalRuns}</Text>
      <Text>{avgPace}</Text>
      <Text>{totalMiles}</Text>
    </View>
  )
}

export default MonthStats
