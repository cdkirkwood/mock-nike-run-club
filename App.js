import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { TotalStats, Header, HorizontalLine, MonthList } from './components'
import { TotalStatsStyles } from './styles'
import Run from './runClass'

export default class App extends React.Component {
  render() {
    const { monthStats, totalStats } = dataStore
    return (
      <View style={styles.container}>
        <Header />
        <HorizontalLine />
        <ScrollView style={styles.scrollViewSize}>
          <TotalStats totalStats={totalStats} styles={TotalStatsStyles} />
          <MonthList stats={monthStats} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollViewSize: {
    //flex: 1
  }
});

const runs = [
  new Run('Tuesday', 'Tuesday Evening Run', 3.46, '8\'52"', '30:42', '1'),
  new Run('Saturday', 'Saturday Afternoon Run', 4.78, '8\'44"', '41:44', '2'),
  new Run('Thursday', 'Thursday Afternoon Run', 5.20, '8\'35"', '44:41', '3'),
  new Run('Tuesday', 'Tuesday Evening Run', 5.01, '8\'27"', '42:20', '4'),
  new Run('Friday', 'Friday Morning Run', 4.68, '8\'57"', '41:55', '5'),
  new Run('Wednesday', 'Wednesday Evening Run', 3.48, '9\'03"', '31:29', '6'),
  new Run('Monday', 'Monday Afternoon Run', 4.43, '8\'50"', '39:09', '7'),
  new Run('Thursday', 'Thursday Afternoon Run', 2.85, '9\'27"', '26:56', '8'),
  new Run('Wednesday', 'Wednesday Evening Run', 4.15, '9\'03"', '37:38', '9'),
  new Run('Wednesday', 'Wednesday Morning Run', 3.54, '9\'14"', '32:44', '10')
]

const dataStore = {
  totalStats: {
    totalMiles: 172.3,
    totalRuns: 47,
    avgNikeFuel: 1547,
    avgPace: '8\'47"'
  },
  monthStats: {
    totalMiles: 41.60,
    totalRuns: 10,
    avgPace: '8\'53"',
    runs: runs
  },
}