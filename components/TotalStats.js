import React from 'react'
import { View } from 'react-native'
import HeaderStatRow from './HeaderStatRow'

const TotalStats = props => {
  const { styles, totalStats } = props
  const { totalMiles, totalRuns, avgNikeFuel, avgPace } = totalStats
  const { container, smallStatsContainer } = styles
  return (
    <View style={container}>
      <HeaderStatRow
        label="Total Miles"
        stat={totalMiles}
        styles={styles} />
      <View style={smallStatsContainer} >
        <HeaderStatRow
          label="Total Runs"
          stat={totalRuns}
          styles={styles} />
        <HeaderStatRow
          label="Avg. NikeFuel"
          stat={avgNikeFuel}
          styles={styles} />
        <HeaderStatRow
          label="Avg. Pace"
          stat={avgPace}
          styles={styles} />
      </View>
    </View>
  )
}

export default TotalStats
