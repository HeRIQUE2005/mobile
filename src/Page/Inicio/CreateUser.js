import { useState } from "react";
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from "react-native";

export default function CreateUser() {
  const [nomeInput, setNomeInput] = useState("");
  const [salvoInput, setNomeSalvoInput] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#000000"
        barStyle="light-content"
        translucent={false}
      />
      <View style={styles.Logo}>
        <Image
          source={require("../../../assets/livro1.png")}
          style={{ width: 250, height: 200 }}
        />
      </View>
      <View style={styles.TextoConta}>
        <Text style={styles.CriarConta}>Criar Conta</Text>
      </View>

      <View style={styles.Inputs}>
        <TextInput style={styles.InputsText} placeholder="Email" />
        <TextInput style={styles.InputsText}placeholder="Usuario" />
        <TextInput style={styles.InputsText} placeholder="Senha" />
      </View>

      <TouchableOpacity style={styles.Button}>
        <Text style={styles.TextButton}>Criar Conta</Text>
      </TouchableOpacity>

      <View style={styles.PossuiConta}>
        <Text>Já Possui Uma Conta?</Text>
        <TouchableOpacity>
        <Text style={styles.PossuiConta1}>Login</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00000",
    alignItems: "center",
    marginTop: 50,
  },

  TextoConta: {
    marginTop: "50",
  },

  CriarConta: {
    fontSize: 30,
  },

  Inputs: {
    marginTop: 40,
    gap: 30
  },

  InputsText: {
    width: 270,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10
  },

  Button: {
    marginTop: 40,
    backgroundColor: "#C4BBBB",
    paddingHorizontal: 50,
    paddingVertical: 5,
    borderRadius: 10
  },

  TextButton: {
    fontSize: 24
  },

  PossuiConta: {
    marginTop: 30,
    flex: 1,
    alignItems: "center",
    gap: 5,
    color: "#C4BBBB"
  },

  PossuiConta1: {
    fontSize: 16,
  }
});
