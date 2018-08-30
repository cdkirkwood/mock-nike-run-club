import React from 'react'
import { Text, View } from 'react-native'

const TotalStats = props => {
  const { styles, totalStats } = props
  const { totalMiles, totalRuns, avgNikeFuel, avgPace } = totalStats
  const { container, largeStats, largeStatsContainer, smallStatsContainer, smallStats } = styles
  return (
    <View style={container}>
      <View style={largeStatsContainer}>
        <Text style={largeStats}>{totalMiles}</Text>
      </View>
      <View style={smallStatsContainer}>
        <Text style={smallStats}>{totalRuns}</Text>
        <Text style={smallStats}>{avgNikeFuel}</Text>
        <Text style={smallStats}>{avgPace}</Text>
      </View>
    </View>
  )
}


export default TotalStats
