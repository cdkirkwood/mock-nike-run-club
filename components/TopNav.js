import React from 'react'
import { Text, View } from 'react-native'

const TopNav = (props) => {
  const { styles } = props
  const { text, topNav, profileButton, profileButtonText } = styles
  return (
    <View style={topNav}>
      <View style={profileButton}>
        <Text style={profileButtonText}>CK</Text>
      </View>
      <Text style={text}>ACTIVITY</Text>
      <Text style={text}>+</Text>
    </View>
  )
}

export default TopNav
