import React from 'react'
import { View } from 'react-native'
import MonthHeader from './MonthHeader'
import { MonthStatsStyles } from '../styles'
import SingleRunCard from './SingleRunCard'

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

export default MonthList
