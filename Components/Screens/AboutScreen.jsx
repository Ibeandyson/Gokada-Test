import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import Header from '../ReuseableComponents/Header';

const AboutScreen = props => {
    return (
        <View>
            <Header {...props} />
            <View style={styles.container}>
                <Avatar.Image size={200} source={require('../../assets/ceo.png')} />
                <Text style={{marginTop: '5%', fontSize: 20, fontWeight: 'bold'}}>Fahim Saleh</Text>
                <Text style={{marginTop: '2%'}}>CEO of Gokada</Text>
                <Text
                    style={{
                        marginTop: '5%',
                        padding: 10,
                        alignItems: 'center',
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                        opacity: 0.5
                    }}>
                    The largest last mile delivery service in Nigeria. Quality drivers. Affordable prices. Tracking.The
                    level of care and customer service our pilots provide is a testament to the filtering, training, and
                    values we've instilled into them from the beginning.
                </Text>
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

export default AboutScreen;
