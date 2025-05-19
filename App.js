import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image
} from 'react-native'



export default function App() {

  const [nomeInput, setNomeInput] = useState('')
  const [salvoInput, setNomeSalvoInput] = useState('')

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput))
    setNomeInput('')
    setNomeSalvoInput('')
  }





  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          backgroundColor='#FFFFFF'
          barStyle='dark-content'
          translucent={false}
        />

        <Image source={require('./assets/livro1.png')} />
        
        <Text style={styles.TextoConta}>Crie sua conta</Text>

        <TextInput
          style={styles.senhaEntrada}
          placeholder="Digite a senha"
          value={nomeInput}
          onChangeText={setNomeInput}
        />

        <TextInput
          style={styles.entraUsuario}
          placeholder="Digite Usuario"
          value={salvoInput}
          onChangeText={setNomeSalvoInput}
        />


        <TextInput
          style={styles.EntraConta}
        />





        <View>
          <Text>{salvoInput.nome}</Text>
          <Text>{salvoInput.email}</Text>
          <Text>{salvoInput.senha}</Text>


        </View>

      </View>

    </SafeAreaView>


  );
}

const styles = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    position: 'relative',
    marginTop: 10
  },

  textoEntrada: {
    marginTop: 220,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7,

  },

  senhaEntrada: {
    marginTop: 330,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7,
  },

  senhaUsuario: {
    fontSize: 15,
    fontWeight: 'black'
  },

  entraUsuario: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7
  },


  TextoConta: {
    position: 'relative',
    top: '150',
    fontSize: 30
    
  }




});

  
