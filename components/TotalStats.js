import React from 'react'
import { View } from 'react-native'
import TotalStatsRow from './TotalStatsRow'
import { TotalStatsStyles } from '../styles'

const TotalStats = props => {
  const { totalMiles, totalRuns, avgNikeFuel, avgPace } = props.totalStats
  const { container, smallStatsContainer } = TotalStatsStyles
  return (
    <View style={container}>
      <TotalStatsRow
        label="Total Miles"
        stat={totalMiles}
        styles={TotalStatsStyles} />
      <View style={smallStatsContainer} >
        <TotalStatsRow
          label="Total Runs"
          stat={totalRuns}
          styles={TotalStatsStyles} />
        <TotalStatsRow
          label="Avg. NikeFuel"
          stat={avgNikeFuel}
          styles={TotalStatsStyles} />
        <TotalStatsRow
          label="Avg. Pace"
          stat={avgPace}
          styles={TotalStatsStyles} />
      </View>
    </View>
  )
}

export default TotalStats
