import React from 'react';
import { Sun, CloudRain, Cloudy, CloudSnow, CloudSun, CloudLightning, CloudFog } from 'lucide-react-native';
import { View, Text, StyleSheet } from 'react-native';

const iconMap = {
  sunny: <CloudSun color="#f5d142" size={64} accessibilityLabel="Soleado" />,
  clear: <CloudSun color="#f5d142" size={64} accessibilityLabel="Despejado" />,
  "mostly sunny": <CloudSun color="#f5d142" size={64} accessibilityLabel="Mayormente soleado" />,
  soleado: <CloudSun color="#f5d142" size={64} accessibilityLabel="Soleado" />,
  despejado: <CloudSun color="#f5d142" size={64} accessibilityLabel="Despejado" />,
  
  rain: <CloudRain color="#2e86c1" size={64} accessibilityLabel="Lluvia" />,
  "patchy rain nearby": <CloudRain color="#2e86c1" size={64} accessibilityLabel="Lluvia dispersa" />,
  lloviendo: <CloudRain color="#2e86c1" size={64} accessibilityLabel="Lloviendo" />,
  lluvia: <CloudRain color="#2e86c1" size={64} accessibilityLabel="Lluvia" />,
  chubascos: <CloudRain color="#2e86c1" size={64} accessibilityLabel="Chubascos" />,
  
  cloudy: <Cloudy color="white" size={64} accessibilityLabel="Nublado" />,
  "partly cloudy": <Cloudy color="white" size={64} accessibilityLabel="Parcialmente nublado" />,
  nublado: <Cloudy color="white" size={64} accessibilityLabel="Nublado" />,
  "parcialmente nublado": <Cloudy color="white" size={64} accessibilityLabel="Parcialmente nublado" />,
  
  snow: <CloudSnow color="#ffffff" size={64} accessibilityLabel="Nieve" />,
  nevando: <CloudSnow color="#ffffff" size={64} accessibilityLabel="Nevando" />,
  nieve: <CloudSnow color="#ffffff" size={64} accessibilityLabel="Nieve" />,
  
  thunderstorm: <CloudLightning color="#d35400" size={64} accessibilityLabel="Tormenta eléctrica" />,
  "tormenta eléctrica": <CloudLightning color="#d35400" size={64} accessibilityLabel="Tormenta eléctrica" />,
  tormenta: <CloudLightning color="#d35400" size={64} accessibilityLabel="Tormenta" />,
  
  fog: <CloudFog color="#bdc3c7" size={64} accessibilityLabel="Niebla" />,
  mist: <CloudFog color="#bdc3c7" size={64} accessibilityLabel="Neblina" />,
  niebla: <CloudFog color="#bdc3c7" size={64} accessibilityLabel="Niebla" />,
  neblina: <CloudFog color="#bdc3c7" size={64} accessibilityLabel="Neblina" />,
};

const WeatherIcon = ({ description }) => {
  const icon = iconMap[description?.toLowerCase() || ""] || <Sun color="#f5d142" size={64} accessibilityLabel="Soleado" />;
    

  return (
    <View style={styles.container}>
      {icon}
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
    color: 'white',
  },
});

export default WeatherIcon;
