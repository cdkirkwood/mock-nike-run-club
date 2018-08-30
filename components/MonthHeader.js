import React from 'react'
import { View } from 'react-native'
import MonthDate from './MonthDate'
import MonthStats from './MonthStats'

const MonthHeader = props => {
  const { styles, stats} = props
  const {  monthAndYear, statsText } = styles
  return (
    <View style={monthAndYear}>
      <MonthDate style={statsText} />
      <MonthStats stats={stats} styles={styles} />
    </View>
  )
}

export default MonthHeader
