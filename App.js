import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'


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
        <Text styles={styles.textoTitulo}>Crie sua Conta</Text>
        <TextInput
          style={styles.textoEntrada}
          placeholder="Digite o Email"
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <Text style={styles.LoginSenha}>Coloque sua Senha</Text>
        <TextInput
          style={styles.senhaEntrada}
          placeholder="Digite a senha"
          value={nomeInput}
          onChangeText={setNomeInput}
        />
        <Text styles={styles.senhaUsuario}>Coloque seu Usuario</Text>
        <TextInput
          style={styles.entraUsuario}
          placeholder="Digite Usuario"
          value={nomeInput}
          onChangeText={setNomeInput}
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
  textoTitulo: {
    fontSize: 10,
    fontWeight: 'bold',

  },
  textoEntrada: {
    marginTop: 220,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7,

  },
  LoginSenha: {
    fontSize: 15,
    fontWeight: 'black'
  },
  senhaEntrada: {
    marginTop: 20,
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
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 7
  }




});
