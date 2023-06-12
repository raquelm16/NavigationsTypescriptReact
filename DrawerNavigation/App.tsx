//imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

//screens
import A from './screens/telaA';
import B from './screens/telaB';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Tela A" component={A} options={{ drawerLabel: 'Tela A' }} />
      <Drawer.Screen name="Tela B" component={B} options={{ drawerLabel: 'Tela B' }} />
    </Drawer.Navigator>
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
