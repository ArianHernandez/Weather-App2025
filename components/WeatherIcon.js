// WeatherIcon.js
import React from 'react';
import { Sun, CloudRain, Cloudy, CloudSnow, CloudSun, CloudLightning, CloudFog } from 'lucide-react-native';
import { View, Text, StyleSheet } from 'react-native';

const WeatherIcon = ({ description }) => {
  const getIcon = () => {
    switch (description.toLowerCase()) {
      case 'soleado':
      case 'mayormente soleado':
      case 'mostly sunny':
      case 'despejado':
      case 'sunny':
      case 'clear': 
        return <CloudSun color="#f5d142" size={64} />;
      case 'lluvia':
      case 'lloviendo':
      case 'chubascos':
      case 'rain':
        return <CloudRain color="#2e86c1" size={64} />;
      case 'nublado':
      case 'parcialmente nublado':
      case 'cloudy':
      case 'partly cloudy':
        return <Cloudy color="#a2a2a2" size={64} />;
      case 'nieve':
      case 'nevando':
      case 'snow':
        return <CloudSnow color="#ffffff" size={64} />;
      case 'tormenta':
      case 'tormenta eléctrica':
      case 'thunderstorm':
        return <CloudLightning color="#d35400" size={64} />;
      case 'niebla':
      case 'neblina':
      case 'fog':
      case 'mist':
        return <CloudFog color="#bdc3c7" size={64} />;
      default:
        return <Sun color="#f5d142" size={64} />; // Ícono por defecto
    }
  };

  return (
    <View style={styles.container}>
      {getIcon()}
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default WeatherIcon;
