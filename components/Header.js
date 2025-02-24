import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Menu, Cloud, LayoutGrid, Newspaper, CloudSun } from 'lucide-react-native';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla
const isSmallScreen = width < 380; // Determinar si la pantalla es pequeña

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Icono del menú en pantallas pequeñas */}
      {isSmallScreen && (
        <TouchableOpacity style={styles.menuButton}>
          <Menu size={24} color="#2563EB" />
        </TouchableOpacity>
      )}

      {/* Logo con ícono de nube */}
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>WEATHER</Text>
        <Cloud size={isSmallScreen ? 28 : 34} color="#2563EB" style={styles.icon} />
        <Text style={styles.logoText}>APP</Text>
      </View>

      {/* Opciones de navegación */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <CloudSun size={18} />
          {!isSmallScreen && <Text style={styles.navText}>Weather</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <LayoutGrid size={20} />
          {!isSmallScreen && <Text style={styles.navText}>Apps</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Newspaper size={18} />
          {!isSmallScreen && <Text style={styles.navText}>News</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Se adapta automáticamente
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  menuButton: {
    padding: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: isSmallScreen ? 22 : 26, // Ajuste dinámico
    fontWeight: 'bold',
    color: '#2563EB',
  },
  icon: {
    marginHorizontal: 4,
  },
  navContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Permite que los elementos bajen en pantallas pequeñas
    justifyContent: 'flex-end',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: isSmallScreen ? 3 : 8,
    paddingVertical: isSmallScreen ? 4 : 6,
  },
  navText: {
    color: '#4B5563',
    fontSize: isSmallScreen ? 14 : 16, // Ajuste dinámico
    marginLeft: 4,
  },
});
export default Header;

