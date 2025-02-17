// WeatherIcon.js
import React from 'react';
import { Sun, CloudRain, Cloud, CloudSnow, CloudLightning, CloudFog } from 'lucide-react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherIcon = ({ description }) => {
  const getIcon = () => {
    switch (description.toLowerCase()) {
      case 'soleado':
      case 'despejado':
      case 'clear':
        return <Sun color="#f5d142" size={64} />;
      case 'lluvia':
      case 'lloviendo':
      case 'chubascos':
      case 'rain':
        return <CloudRain color="#2e86c1" size={64} />;
      case 'nublado':
      case 'parcialmente nublado':
      case 'cloudy':
      case 'overcast':
        return <Cloud color="#95a5a6" size={64} />;
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
