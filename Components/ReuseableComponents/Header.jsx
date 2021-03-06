import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Appbar.Header style={styles.AppBarBg}>
                <View style={{marginLeft: 20}} />
                <Text style={{color: '#ffffff', fontSize: 30, fontWeight: 'bold'}}>Gokada</Text>
                <View style={{flex: 1, marginLeft: 20, flexDirection: 'row-reverse'}}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <MaterialCommunityIcons name="microsoft-xbox-controller-menu" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </Appbar.Header>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    }
});

export default Header;
