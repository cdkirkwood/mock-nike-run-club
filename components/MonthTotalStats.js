import React from 'react'
import { View, Text } from 'react-native'

const MonthTotalStats = props => {
  const { stats, styles } = props
  const { totalRuns, avgPace, totalMiles } = stats
  const { statsContainer, statsText } = styles
  return (
    <View style={statsContainer}>
      <Text style={statsText}>{totalRuns} runs</Text>
      <Text style={statsText}>{avgPace}/mi</Text>
      <Text style={statsText}>{totalMiles}mi</Text>
    </View>
  )
}

export default MonthTotalStats
