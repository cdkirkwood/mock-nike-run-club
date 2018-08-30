import React from 'react'
import { Text, View } from 'react-native'

const TopNav = (props) => {
  const { styles } = props
  const { text, topNav } = styles
  return (
    <View style={topNav}>
      <Text style={text}>CK</Text>
      <Text style={text}>ACTIVITY</Text>
      <Text style={text}>+</Text>
    </View>
  )
}

export default TopNav
