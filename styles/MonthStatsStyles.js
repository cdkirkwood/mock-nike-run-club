import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
  },
  cardContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  cardImage: {
    height: 100,
    width: 100
  },
  runInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default styles
