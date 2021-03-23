import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ScrollView, FlatList} from 'react-native';
import Header from '../ReuseableComponents/Header';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../../Redux/Action';
import {ActivityIndicator} from 'react-native-paper';
import News from '../ReuseableComponents/News';

const HomeScreen = props => {
    const windowWidth = Dimensions.get('window').width;
    const newsData = useSelector(state => state.newsData);
    const {news} = newsData;

    const dispatch = useDispatch();
    useEffect(() => {
        if (news == null) {
            dispatch(fetchData());
        }
    }, []);
    if (news) {
       
        console.log('my news', news);
    }
    

    return (
        <View style={styles.container}>
            <FlatList
                style={{flex: 1, width: windowWidth}}
                data={news !== null ? news : null}
                initialNumToRender={15}
                keyExtractor={item => item.id}
                ListHeaderComponent={<TopPage />}
                renderItem={({item, index}) => <News {...props} item={item} key={item.id} />}
            />
        </View>
    );
};

const TopPage = (props) => {
    const windowWidth = Dimensions.get('window').width;
    const newsData = useSelector(state => state.newsData);
    const {loading} = newsData;
    return (
        <View style={styles.container}>
            <Header {...props} />
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View>
                <Image
                    style={{height: windowWidth, width: windowWidth}}
                    size={40}
                    source={require('../../assets/bike.jpg')}
                />
            </View>
            <Text style={{marginTop: '10%', fontSize: 30, fontWeight: 'bold', padding: 10, color: '#00c795'}}>
                Jobs
            </Text>
            {loading ? <ActivityIndicator animating={true} color="#00c795" /> : null}
            {/* </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
});

export default HomeScreen;
