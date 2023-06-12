import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import A from './telaA';

export default function telaB({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text>Você está na tela B</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontWeight:'bold',
    color:'#df2c14'
  }
});