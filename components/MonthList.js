import React from 'react'
import { View, FlatList } from 'react-native'
import MonthHeader from './MonthHeader'
import { MonthStatsStyles } from '../styles'
import SingleRunCard from './SingleRunCard'
import TotalStats from './TotalStats'

const MonthList = (props) => {
  return (
    <View style={MonthStatsStyles.container}>
      <MonthHeader stats={props.stats} styles={MonthStatsStyles} />
      <View style={MonthStatsStyles.runsContainer}>
        {props.stats.runs.map(
          item => <SingleRunCard run={item} key={item.key} styles={MonthStatsStyles} />
        )}
      </View>
    </View>
  )
}

const dataStore = {
  totalStats: {
    totalMiles: 172.3,
    totalRuns: 47,
    avgNikeFuel: 1547,
    avgPace: '8\'47"'
  }
}

export default MonthList
