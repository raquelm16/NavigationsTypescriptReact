//imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//screens
import A from './screens/telaA';
import B from './screens/telaB';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Tela A" component={A}  />
      <Tab.Screen name="Tela B" component={B}  />
    </Tab.Navigator>
    </NavigationContainer>
        
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
