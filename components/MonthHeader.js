import React from 'react'
import { View } from 'react-native'
import MonthDate from './MonthDate'
import MonthTotalStats from './MonthTotalStats'

const MonthHeader = props => {
  const { styles, stats} = props
  const {  monthAndYear, statsText } = styles
  return (
    <View style={monthAndYear}>
      <MonthDate style={statsText} />
      <MonthTotalStats stats={stats} styles={styles} />
    </View>
  )
}

export default MonthHeader
