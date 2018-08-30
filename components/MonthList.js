import React from 'react'
import { View } from 'react-native'
import MonthHeader from './MonthHeader'
import { MonthStatsStyles } from '../styles'

const MonthList = (props) => {
  return (
    <View>
      <MonthHeader stats={props.stats} styles={MonthStatsStyles} />
    </View>
  )
}

export default MonthList
