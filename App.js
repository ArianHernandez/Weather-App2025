import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Weather1 from './components/Weather1';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        contentContainerStyle={styles.content} 
        keyboardShouldPersistTaps="handled"
      >
        <Weather1 />
        <Footer /> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 0, 0)',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgba(248, 245, 245, 0.95)",
    paddingBottom: 20, // Evita que el contenido toque el borde inferior
  },
});