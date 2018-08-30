import React from 'react'
import { View, Text, Image } from 'react-native'
const image = require('../mapImage.png')

const SingleRunCard = props => {
  const { day, name, totalMiles, avgPace, time, id } = props.run
  const { cardContainer, statsContainer, cardImage, runInfo, gray, bold } = props.styles
  return (
    <View key={id} style={cardContainer}>
      <Image source={image} style={cardImage} />
      <View style={runInfo}>
        <Text style={gray}>{day}</Text>
        <Text style={bold}>{name}</Text>
        <View style={statsContainer}>
          <Text style={gray}>{totalMiles}mi</Text>
          <Text style={gray}>{avgPace}/mi</Text>
          <Text style={gray}>{time}</Text>
        </View>
      </View>
    </View>
  )
}

export default SingleRunCard
