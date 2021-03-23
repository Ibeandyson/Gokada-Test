import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../ReuseableComponents/Header';

const ContactScreen = () => {
    return (
        <View>
            <Header />
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Contact</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ContactScreen;
