import React from 'react'
import { View } from 'react-native'
import StatRow from './StatRow'

const TotalStats = props => {
  const { styles, totalStats } = props
  const { totalMiles, totalRuns, avgNikeFuel, avgPace } = totalStats
  const { container, smallStatsContainer } = styles
  return (
    <View style={container}>
      <StatRow label="Total Miles" stat={totalMiles} styles={styles} />
      <View style={smallStatsContainer} >
        <StatRow label="Total Runs" stat={totalRuns} styles={styles} />
        <StatRow label="Avg. NikeFuel" stat={avgNikeFuel} styles={styles} />
        <StatRow label="Avg. Pace" stat={avgPace} styles={styles} />
      </View>
    </View>
  )
}

export default TotalStats
