import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import WeatherIcon from './WeatherIcon';

const Weather1 = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '74d28aca4e24368476e6a32249b1fad5';
  const CITY = 'Ciudad+Lerdo';
  const URL = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY}`;

  useEffect(() => {
    console.log("URL de la solicitud:", URL);
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log("Datos del clima:", data);
        if (data.error) {
          setError(data.error.info);
        } else {
          setWeatherData(data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener datos del clima:", error);
        setError("No se pudo obtener el clima.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
  
      <Text style={styles.city}>{weatherData.location.name}</Text>
     
      <Text style={styles.temp}>{weatherData.current.temperature} °C</Text>
      <WeatherIcon description={weatherData.current.weather_descriptions[0]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  city: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  description: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default Weather1;

 

