import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import Weather1 from './components/Weather1';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
    <View style={styles.container} >
    <Header/>
    <ScrollView contentContainerStyle={styles.content}>
   <Weather1/>
    </ScrollView>
    
    <Footer/>
    </View>
    </>
  );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    content: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

});


