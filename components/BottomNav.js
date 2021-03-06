import React from 'react'
import { Text, View } from 'react-native'

const BottomNav = (props) => {
  const { styles } = props
  const { bottomNav, font, achievements } = styles
  return (
    <View style={bottomNav}>
      <Text style={font}>HISTORY</Text>
      <Text style={[font, achievements]}>ACHIEVEMENTS</Text>
      <Text style={font}>RUN LEVELS</Text>
    </View>
  )
}

export default BottomNav
