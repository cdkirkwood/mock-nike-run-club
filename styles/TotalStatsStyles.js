import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    justifyContent: 'space-evenly'
  },
  centerVertically: {
    alignItems: 'center'
  },
  largeStats: {
    fontWeight: 'bold',
    fontSize: 50
  },
  smallStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallStats: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  statLabel: {
    color: 'gray'
  }
})

export default styles
