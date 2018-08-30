import React from 'react';
import { StyleSheet, ScollView, Text, View } from 'react-native';
import { TotalStats, Header, HorizontalLine, MonthList } from './components'
import { TotalStatsStyles } from './styles'
import MonthStats from './components/MonthStats';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <HorizontalLine />
        <TotalStats totalStats={dataStore.totalStats} styles={TotalStatsStyles} />
        <MonthList stats={dataStore.monthStats.august} />
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
  },
  monthStats: {
      august: {
        totalMiles: 41.60,
        totalRuns: 10,
        avgPace: '8\'53""',
        runs: []
      }
    },
}