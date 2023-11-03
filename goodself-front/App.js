import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import WelcomeStack from './Navigations/WelcomeStack';
import { useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';
export default function App() {
  useEffect(() => {
    LogBox.ignoreLogs(['Sending']);
  }, [])

  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <WelcomeStack />
        </NavigationContainer>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
