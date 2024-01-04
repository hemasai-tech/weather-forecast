import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../styles/styles';

const WeatherCard = ({day, temperature, condition, humidity}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.temperature}>Temperature: {temperature}°C</Text>
      <Text style={styles.condition}>Condition: {condition}</Text>
      <Text style={styles.humidity}>Humidity: {humidity}%</Text>
    </View>
  );
};
export default WeatherCard;
