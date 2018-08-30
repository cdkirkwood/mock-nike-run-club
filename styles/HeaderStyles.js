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
    //alignItems: 'stretch'
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //alignItems: 'stretch'
  },
  text: {
    fontWeight: 'bold',
  }
})

export default styles
