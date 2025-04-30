import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { StatusBar ,SafeAreaView ,StyleSheet, Text, View, TextBase, TouchableOpacity, TextInput } from 'react-native'


export default function App() {

  const [nomeInput, setNomeInput]= useState('')
  const [salvoInput, setNomeSalvoInput]= useState('')

  async function salvarNome() {
    await AsyncStorage.setItem('nome', JSON.stringify(nomeInput))
  setNomeInput('')
  setNomeSalvoInput('')
  }

  async function PegarNome() {
    const iNome = await AsyncStorage.getItem('nome')
    const pNome = JSON.parse(iNome)
    setNomeSalvo(pNome)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <StatusBar
      backgroundColor='#FFFFFF'
      barStyle='dark-content'
      translucent={false}
      />
    <Text styles={styles.textoTitulo}>Hi welcome to a my app!</Text>
    <TextInput 
    style={styles.textoEntrada}
    placeholder="Digite o Nome"
    value={nomeInput}
    onChangeText={setNomeInput}
    />
    <TouchableOpacity style={styles.botaoGravar} onPress={salvarNome}>

    <Text style={styles.textoBotao}>salvarNome</Text>

    </TouchableOpacity>

    <TouchableOpacity style={styles.BotaoPegar} onPress={PegarNome}>

      <Text style={styles.textoBotao}>PegarNome</Text>

    </TouchableOpacity>



    
    <View>
    <Text>{salvoInput.nome}</Text>
    <Text>{salvoInput.email}</Text>
    <Text>{salvoInput.senha}</Text>
    <Text>{salvoInput.cep}</Text>
    <Text>{salvoInput.pais}</Text>

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
    textAlign: 'center',
  marginTop: 15
  },
  textoTitulo: {
    fontSize: 30,
    fontWeight: 'bold'
  }
});
