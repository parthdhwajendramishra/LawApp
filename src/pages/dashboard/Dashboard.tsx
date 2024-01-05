import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const Dashboard: React.FC = () => (
  <View>
    <View>
      <Text>Welcome to Dashboard</Text>
    </View>
  </View>
);
export default Dashboard;

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  messageText: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#333',
    marginTop: -height * 0.15,
  },
});
