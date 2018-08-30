import React from 'react'
import { View } from 'react-native'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import { HeaderStyles } from '../styles'

const Header = () => {
  return (
    <View style={HeaderStyles.container}>
      <TopNav styles={HeaderStyles} />
      <BottomNav styles={HeaderStyles} />
    </View>
  )
}

export default Header
