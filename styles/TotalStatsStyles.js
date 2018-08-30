import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  largeStatsContainer: {
    alignItems: 'center'
  },
  largeStats: {
    //flex: 1,
    fontWeight: 'bold',
    fontSize: 30
  },
  smallStatsContainer: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallStats: {
    fontWeight: 'bold',
    fontSize: 15,
  }
})

export default styles
