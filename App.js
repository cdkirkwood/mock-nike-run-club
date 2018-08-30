import React from 'react';
import { StyleSheet, ScollView, Text, View } from 'react-native';
import { TotalStats, Header } from './components'
import { TotalStatsStyles } from './styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TotalStats totalStats={dataStore.totalStats} styles={TotalStatsStyles}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

const dataStore = {
  totalStats: {
    totalMiles: 172.3,
    totalRuns: 47,
    avgNikeFuel: 1547,
    avgPace: '8\'47""'
  }
}