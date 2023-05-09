import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ username }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/2ea1d/react.jpg' }}
            />
            <Text style={styles.title}>¡Bienvenido querido Usuario !</Text>
            <Text style={styles.subtitle}>Gracias por iniciar sesión.</Text>
            <Text style={styles.info}>Te damos la bienvenida a nuestra aplicación.</Text>
            <Text style={styles.info}>Aquí encontrarás toda la información que necesitas para hacer tu vida más fácil.</Text>
            <Text style={styles.info}>No dudes en contactarnos si necesitas ayuda o soporte.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#grey'
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    subtitle: {
        fontSize: 20,
        marginBottom: 10
    },
    info: {
        fontSize: 16,
        marginHorizontal: 30,
        textAlign: 'center'
    }
});

export default WelcomeScreen;
