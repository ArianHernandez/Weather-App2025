import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import WeatherIcon from './WeatherIcon';

const cities = ['Ciudad+Lerdo', 'Torreon', 'Gomez+Palacio'];
const API_KEY = '8971f951184a6cf9f4f683d50a618635';

const Weather1 = () => {
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);
      const CITY = cities[currentCityIndex];
      const URL = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${CITY}`;
      console.log("URL de la solicitud:", URL);
      
      const response = await fetch(URL);
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.info);
      }
      
      setWeatherData(data);
    } catch (err) {
      console.error("Error al obtener datos del clima:", err);
      setError(err.message || "No se pudo obtener el clima.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [currentCityIndex]);

  const nextCity = () => setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  const prevCity = () => setCurrentCityIndex((prevIndex) => (prevIndex - 1 + cities.length) % cities.length);

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
        <View style={styles.arrowContainer}>
          <TouchableOpacity onPress={prevCity}>
            <Text style={styles.arrow}>&lt;</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={nextCity}>
            <Text style={styles.arrow}>&gt;</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={prevCity}>
          <Text style={styles.arrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.city}>{weatherData.location.name}</Text>
        <TouchableOpacity onPress={nextCity}>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      </View>
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
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  arrow: {
    fontSize: 40,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#333',
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
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default Weather1;
