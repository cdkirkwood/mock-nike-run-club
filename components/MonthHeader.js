import React from 'react'
import { View } from 'react-native'
import MonthDate from './MonthDate'
import MonthStats from './MonthStats'

const MonthHeader = props => {
  const { styles, stats} = props
  const {  rowAndSpace } = styles
  return (
    <View style={rowAndSpace}>
      <MonthDate />
      <MonthStats stats={stats} styles={rowAndSpace} />
    </View>
  )
}

export default MonthHeader
