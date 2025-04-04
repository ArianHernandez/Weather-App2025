import React,{ useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Modal, Linking } from 'react-native';
import { LayoutGrid, Newspaper, CloudSun } from 'lucide-react-native';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Obtener el ancho de la pantalla
const isSmallScreen = width < 380; // Determinar si la pantalla es pequeña

const Header = () => {

  const [modalVisible, setModalVisible] = useState(null); // Estado para el modal

  const [fuentesCargadas] = useFonts({
    "ClimateCrisis-Regular": require("../assets/fonts/ClimateCrisis-Regular.ttf"),
  });

  if (!fuentesCargadas) {
    return <Text>Cargando fuente...</Text>;
  }
  const openURL = (url) => {
    Linking.openURL(url).catch(err => console.error("Error al abrir el enlace", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>WEATHER</Text>
        <MaterialCommunityIcons name='cloud-outline' size={isSmallScreen ? 24 : 34} color="#2563EB" style={styles.icon} />
        <Text style={styles.logoText}>APP</Text>
      </View>

      {isSmallScreen && (
        <TouchableOpacity style={styles.cogContainer}>
          <MaterialCommunityIcons name='cog-outline' size={24} color="#2563EB" />
        </TouchableOpacity>
      )}

      {/* Opciones de navegación */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem} onPress={() => setModalVisible("weather")}>
          <CloudSun size={18} />
          {!isSmallScreen && <Text style={styles.navText}>Weather</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setModalVisible("apps")}>
          <LayoutGrid size={20} />
          {!isSmallScreen && <Text style={styles.navText}>Apps</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setModalVisible("news")}>
          <Newspaper size={18} />
          {!isSmallScreen && <Text style={styles.navText}>News</Text>}
        </TouchableOpacity>
      </View>

      {/* Modales */}
      {modalVisible && (
        <Modal transparent={true} animationType="slide" visible={!!modalVisible} onRequestClose={() => setModalVisible(null)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>
                {modalVisible === "weather" ? "Weather Info" : modalVisible === "apps" ? "Our Apps" : "Latest News"}
              </Text>
              <TouchableOpacity style={styles.linkButton} onPress={() => openURL(
                modalVisible === "weather" ? "https://weather.com" :
                modalVisible === "apps" ? "https://play.google.com" :
                "https://news.google.com"
              )}>
                <Text style={styles.linkText}>Abrir enlace</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(null)}>
                <Text style={styles.closeText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

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
    paddingVertical: 6,
    paddingTop: 42,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cogContainer: { marginHorizontal: 90 },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: "ClimateCrisis-Regular",
    fontSize: isSmallScreen ? 16 : 30, // Ajuste dinámico
    color: '#2563EB',
  },
  icon: { marginHorizontal: 2 },
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

  //**Estilos del modal**
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  linkButton: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  linkText: { color: "white", fontSize: 16 },
  closeButton: { marginTop: 10 },
  closeText: { color: "red", fontSize: 16 },
});
export default Header;

