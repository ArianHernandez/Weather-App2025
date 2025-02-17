
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, Cloud, LayoutGrid, Newspaper, CloudSun} from 'lucide-react';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Icono del menú */}
      <TouchableOpacity>
        <Menu size={24} color="#2563EB" /> 
      </TouchableOpacity>

      {/* Logo con ícono de nube */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>WEATHER</Text>
        <Cloud size={34} color="#2563EB" style={styles.icon} />
        <Text style={styles.logoText}>APP</Text>
      </View>

      {/* Opciones de navegación */}
      <View style={[styles.navContainer, styles.appText]}>
        <CloudSun size={18} />
        <Text style={styles.navText}>Weather</Text>
        <LayoutGrid size={20} />  
        <Text style={styles.navText}>Apps</Text>
        <Newspaper size={18} />
        <Text style={styles.navText}>News</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
  },
  logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  logoText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  appText : {
    marginLeft : 12
  },
  icon: {
    marginHorizontal: 4,
  },
  navContainer: {
    flexDirection: 'row',
  },
  navText: {
    color: '#4B5563',
    marginHorizontal: 8,
  }
});

export default Header;
