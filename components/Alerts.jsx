import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Alerts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coming Soon!</Text>
      <Text style={styles.subText}>This feature is currently under development. Stay tuned!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // Ensure the background is consistent
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',  // Dark color for good readability
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#666',  // Lighter color for the secondary message
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Alerts;
