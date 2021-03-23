import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Paragraph, Avatar} from 'react-native-paper';

const News = React.memo(props => {
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title
                    title={props.item.company}
                    subtitle={`${props.item.title} ${props.item.location}`}
                    left={() => (
                        <Avatar.Image
                        size={30}
                            source={{
                                uri: props.item.company_logo
                            }}
                        />
                    )}
                />
            </Card>
        </View>
    );
})


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default  News