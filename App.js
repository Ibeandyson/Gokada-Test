import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, ScrollView, View, Text, StatusBar} from 'react-native';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './Components/Screens/HomeScreen';
import AboutScreen from './Components/Screens/AboutScreen';
import ContactScreen from './Components/Screens/ContactScreen';
import Header from './Components/ReuseableComponents/Header';
import store from "./Redux/Store";

import { Provider} from 'react-redux';

//  ===== App Theme color =====
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00c795',
  },
};

// ===== Navigaton Drawer Function
const Drawer = createDrawerNavigator();

const App = (props) => {

  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#00c795"
        translucent={false}
      />

      <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home"  {...props}>
            <Drawer.Screen
              name="Home"
              options={{headerShown: false}}
              component={HomeScreen}
              {...props}
            />
            <Drawer.Screen
              name="About"
              options={{headerShown: false}}
              component={AboutScreen}
              {...props}
            />
            <Drawer.Screen
              name="Contact"
              options={{headerShown: false}}
              component={ContactScreen}
              {...props}
            />
          </Drawer.Navigator>
        </NavigationContainer>
        </PaperProvider>
      </Provider>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
