import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username: ${username}, Password: ${password}`);

        navigation.navigate("Stack");
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://png.pngtree.com/png-vector/20191003/ourlarge/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg' }}
            />

            <Text style={styles.title}>Iniciar sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre de usuario"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkButtonText}>¿No tienes cuenta? Regístrate aquí</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    logo: {
        height: 100,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        height: 50,
        width: '40%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 16
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 5,
        width: '40%',
        alignItems: 'center',
        marginBottom: 10
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    },
    linkButton: {
        marginTop: 10
    },
    linkButtonText: {
        color: '#2196F3',
        textDecorationLine: 'underline',
        fontSize: 16
    }
});


export default LoginScreen;
