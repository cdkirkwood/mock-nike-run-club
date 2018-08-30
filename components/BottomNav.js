import React from 'react'
import { Text, View } from 'react-native'

const BottomNav = (props) => {
  const { styles } = props
  const { bottomNav } = styles
  return (
    <View style={bottomNav}>
      <Text>HISTORY</Text>
      <Text>ACHIEVEMENTS</Text>
      <Text>RUN LEVELS</Text>
    </View>
  )
}

export default BottomNav
