import React from 'react'
import { View, Text, Image } from 'react-native'
const image = require('../mapImage.png')

const SingleRunCard = props => {
  const { day, name, totalMiles, avgPace, time, id } = props.run
  const { cardContainer, statsContainer, cardImage } = props.styles
  return (
    <View key={id} style={cardContainer}>
      <Image source={image} style={cardImage} />
      <View>
        <Text>{day}</Text>
        <Text>{name}</Text>
        <View style={statsContainer}>
          <Text>{totalMiles}</Text>
          <Text>{avgPace}</Text>
          <Text>{time}</Text>
        </View>
      </View>
    </View>
  )
}

export default SingleRunCard
