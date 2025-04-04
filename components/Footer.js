import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Github, Twitter, Mail } from 'lucide-react-native';

const Footer = () => {
  // Función segura para abrir enlaces
  const openURL = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "No se pudo abrir el enlace.");
      }
    } catch (error) {
      Alert.alert("Error", "Ocurrió un problema al abrir el enlace.");
    }
  };

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 Weather App</Text>
      
      {/* Redes sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => openURL('https://github.com')} accessibilityLabel="GitHub" style={styles.icon}>
          <Github color="#333" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('https://twitter.com')} accessibilityLabel="Twitter" style={styles.icon}>
          <Twitter color="#1DA1F2" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openURL('mailto:support@weatherapp.com')} accessibilityLabel="Email" style={styles.icon}>
          <Mail color="#FF4500" size={24} />
        </TouchableOpacity>
      </View>

      {/* Enlaces */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => openURL('https://weatherstack.com/privacy')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerSeparator}>|</Text>
        <TouchableOpacity onPress={() => openURL('https://weatherstack.com/terms')}>
          <Text style={styles.footerLink}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    alignItems: 'center',
    marginTop: 15, // Separación con el contenido superior
    
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLink: {
    fontSize: 14,
    color: '#007bff',
    textDecorationLine: 'underline',
    marginHorizontal: 5,
  },
  footerSeparator: {
    fontSize: 14,
    color: '#666',
  },
});

export default Footer;
