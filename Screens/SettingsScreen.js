import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración por Enzo Velarde</Text> 
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Cambiar la contraseña</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Notificaciones</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Idioma y región</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Cuenta</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Privacidad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Pressed")}
      >
        <Text style={styles.buttonText}>Ayuda y soporte</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    width: '30%',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
})

export default SettingsScreen
