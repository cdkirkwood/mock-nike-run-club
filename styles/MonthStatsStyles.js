import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  monthAndYear: {
    width: 450,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    alignItems: 'center'
  },
  statsContainer: {
    marginRight: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    height: 75,
    width: 75,
    margin: 15
  },
  runInfo: {
    flex: 1,
    justifyContent: 'space-around',
    margin: 15
  },
  gray: {
    color: 'gray',
    fontSize: 12
  },
  bold: {
    fontWeight: 'bold'
  },

})

export default styles
