import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HomeScreen = () => {
  const activities = [
    { id: 1, name: 'Web Development', hoursLogged: 10, goalHours: 20 },
    { id: 2, name: 'Guitar Practice', hoursLogged: 5, goalHours: 10 },
    { id: 3, name: 'Ableton Production', hoursLogged: 8, goalHours: 15 },
  ];

  return(
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Your Activities</Text>
      {activites.map((activity) => (
        <View key={activites.id} style={styles.activityContainer}>
          <Text style={styles.activityName}>{activity.name}</Text>
          <Text style={styles.activityHours}>
            {activity.hoursLogged}/{activity.goalHours} hours
          </Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activityContainer: {
    marginBotton: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityHours: {
    fontSize: 16,
  },
});

export default HomeScreen;
