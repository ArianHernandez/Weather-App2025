import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator, ImageBackground, Alert } from 'react-native';
import WeatherIcon from './WeatherIcon';


const API_KEY = process.env.WEATHER_API_KEY ||'c7aeb7a5b6d30f57e56fb631886bc327';


const Weather1 = () => {
  const [city, setCity] = useState('Lerdo'); // Ciudad por defecto
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      const URL = `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${cityName}`;
      console.log("URL de la solicitud:", URL);
      

      const response = await fetch(URL);
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.info);
      }
      
      console.log("Datos recibidos:", data);
      setWeatherData(data);
    } catch (err) {
      console.error("Error al obtener datos del clima:", err);
      setError(err.message || "No se pudo obtener el clima.");
      Alert.alert("Error", err.message || "No se pudo obtener el clima.");
    } finally {
      setLoading(false);
    }
  };

   // Se ejecuta cuando cambia la ciudad
  useEffect(() => {
    fetchWeather(city);
  }, [city]);


    return (
      <ImageBackground
      source={require("../assets/world1.jpg")} // Ruta de la imagen local
      style={styles.background} edges={['left', 'right']}
      resizeMode="cover" // Ajuste de la imagen
      >
       <View style={styles.container}> 
        {/* Barra de búsqueda */}
        <TextInput
          style={styles.input}
          placeholder='Buscar ciudad...'
          placeholderTextColor='white'
          value={city}
          onChangeText={setCity}
          onSubmitEditing={() => fetchWeather(city)}
        />
        
        {/* Estado de carga */}
        {loading ? (
          <ActivityIndicator size='large' color="white"/>
        ) : error ? (
          <Text style={styles.error}>Error: {error}</Text>
        ) : weatherData ? (
          <>
          {/*<View style={styles.weatherContainer}>*/}
           <Text style={styles.city}>{weatherData.location.name}</Text>
           <Text style={styles.temp}>{weatherData.current.temperature} °C</Text>
           <WeatherIcon description={weatherData.current.weather_descriptions[0]} />
         {/*</View> */}
          </>
        ) : null}
        </View>
        </ImageBackground>
    );
  };


const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 15, 
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra contenido verticalmente
    alignItems: "center", // Centra contenido horizontalmente
    overflow: "hidden",
  },
  container: {
    width: '100%',
    height: '100',
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Agrega transparencia al fondo del contenido
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: 'white',
    fontSize: 16,
  },
  city: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  temp: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  error: {
    color: 'red',
    fontSize: 18,
  },
});

export default Weather1;
