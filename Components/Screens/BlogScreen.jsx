import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView} from 'react-native';
import Header from '../ReuseableComponents/Header';

const BlogScreen = props => {
    const windowWidth = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <Header {...props} />
            <ScrollView>
                <Image
                    style={{height: windowWidth, width: windowWidth}}
                    size={40}
                    source={require('../../assets/bike.jpg')}
                />
                <Text style={{marginTop: '10%', fontSize: 30, fontWeight: 'bold', padding: 10, color: '#000000'}}>
                    How To Get A Ride
                </Text>
                <Text style={{marginTop: '5%', fontSize: 17, padding: 10, color: '#000000'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ab sunt dignissimos sed neque
                    facilis laboriosam. Omnis neque quae eligendi quos, deleniti, sit iure consequatur, debitis suscipit
                    iusto fugit sapiente! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur ab sunt
                    dignissimos sed neque facilis laboriosam. Omnis neque quae eligendi quos, deleniti, sit iure
                    consequatur, debitis suscipit iusto fugit sapiente! Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Tenetur ab sunt dignissimos sed neque facilis laboriosam. Omnis neque quae
                    eligendi quos, deleniti, sit iure consequatur, debitis suscipit iusto fugit sapiente! Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Tenetur ab sunt dignissimos sed neque facilis
                    laboriosam. Omnis neque quae eligendi quos, deleniti, sit iure consequatur, debitis suscipit iusto
                    fugit sapiente!
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default BlogScreen;
