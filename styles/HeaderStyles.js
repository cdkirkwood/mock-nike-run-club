import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 0.10,
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    justifyContent: 'space-between'
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 12
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  profileButton: {
    backgroundColor: '#D3D3D3',
    height: 25,
    width: 25,
    borderRadius: 25 / 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileButtonText: {
    color: 'white'
  },
  font: {
    fontFamily: 'Futura-CondensedMedium'
  },
  largeStats: {
    fontSize: 20,
  }
})

export default styles
