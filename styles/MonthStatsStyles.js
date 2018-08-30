import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  monthAndYear: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  statsContainer: {
    width: 180,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  statsText: {
    marginRight: 20,
    marginLeft: 20,
    color: 'gray',
    fontFamily: 'Futura-CondensedMedium'
  }
})

export default styles
