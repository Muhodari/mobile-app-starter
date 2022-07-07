import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dashboard Screen</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
        height: '100%',
        width: '100%',
        backgroundColor: '#F7941D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24
    }

});