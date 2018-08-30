import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 30
  },
  centerVertically: {
    alignItems: 'center'
  },
  spaceElements: {
    marginBottom: 40
  },
  largeStats: {
    fontWeight: 'bold',
    fontSize: 75,
    fontFamily: 'Futura-CondensedMedium',
  },
  smallStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallStats: {
    fontSize: 20,
    fontFamily: 'Futura-CondensedMedium'
  },
  statLabel: {
    color: 'gray',
    fontFamily: 'Futura-CondensedMedium'
  }
})

export default styles
