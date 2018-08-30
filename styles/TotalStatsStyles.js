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
    fontSize: 50,
    fontFamily: 'Futura-CondensedMedium'
  },
  smallStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  smallStats: {
    //fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Futura-CondensedMedium'
  },
  statLabel: {
    color: 'gray',
    fontFamily: 'Futura-CondensedMedium'
  }
})

export default styles
