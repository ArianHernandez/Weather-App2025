// Footer.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Github, Twitter, Mail } from 'lucide-react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 Weather App</Text>
      
      {/* Redes sociales */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com')} accessibilityLabel="GitHub">
          <Github color="#333" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com')} accessibilityLabel="Twitter" style={styles.icon}>
          <Twitter color="#1DA1F2" size={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('mailto:support@weatherapp.com')} accessibilityLabel="Email" style={styles.icon}>
          <Mail color="#FF4500" size={24} />
        </TouchableOpacity>
      </View>

      {/* Enlaces */}
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => Linking.openURL('https://weatherapp.com/privacy')}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.footerSeparator}>|</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://weatherapp.com/terms')}>
          <Text style={styles.footerLink}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    alignItems: 'center',
    marginTop: 20, // Separación con el contenido superior
  },
  footerText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 12,
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
