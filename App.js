import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native'



export default function App() {

  const [nomeInput, setNomeInput] = useState('')
  const [salvoInput, setNomeSalvoInput] = useState('')

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput))
    setNomeInput('')
    setNomeSalvoInput('')
  }

  <img src="https://as2.ftcdn.net/jpg/04/08/74/09/1000_F_408740958_LvKdx0d7pMaX1JKbSHzMCxSyNsQHkchw.jpg" alt="Descricao" width="200" /> 

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          backgroundColor='#FFFFFF'
          barStyle='dark-content'
          translucent={false}
        />
        <TextInput
          style={styles.senhaEntrada}
          placeholder="Digite a senha"
          value={nomeInput}
          onChangeText={setNomeInput}
        />

        <TextInput
          style={styles.entraUsuario}
          placeholder="Digite Usuario"
          value={nomeInput}
          onChangeText={setNomeInput}
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
  }




});
