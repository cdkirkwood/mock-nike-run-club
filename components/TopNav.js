import React from 'react'
import { Text, View } from 'react-native'

const TopNav = (props) => {
  const { styles } = props
  const { font, largeStats, topNav, profileButton, profileButtonText, activity } = styles
  return (
    <View style={topNav}>
      <View style={profileButton}>
        <Text style={profileButtonText}>CK</Text>
      </View>
      <Text style={[font, largeStats, activity]}>ACTIVITY</Text>
      <Text style={[font, largeStats]}>+</Text>
    </View>
  )
}

export default TopNav
