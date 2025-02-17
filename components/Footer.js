// Footer.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2025 Weather App</Text>
      <View style={styles.socialContainer}>
        <Github color="#333" size={24} />
        <Twitter color="#1DA1F2" size={24} style={styles.icon} />
        <Mail color="#FF4500" size={24} style={styles.icon} />
      </View>
      <Text style={styles.footerLink}>Privacy Policy | Terms of Service</Text>
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
    marginHorizontal: 10,
  },
  footerLink: {
    fontSize: 14,
    color: '#007bff',
  },
});

export default Footer;
