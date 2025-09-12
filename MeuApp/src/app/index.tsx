import React, { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Dimensions} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { navigate } from "expo-router/build/global-state/routing";
import { router } from "expo-router";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = () => {
    if (email == "Teste@gmail.com" && senha == "123") {
      router.replace("/home");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCurve} />

      <View style={styles.content}>
        <Text style={styles.title}>Entrar</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="at-outline" size={22} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            placeholderTextColor="#777"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={22} color="black" />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#777"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomCurve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topCurve: {
    width: width,
    height: 180,
    backgroundColor: "blue",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    position: "absolute",
    top: -80,
  },
  bottomCurve: {
    width: width,
    height: 180,
    backgroundColor: "blue",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    position: "absolute",
    bottom: -80,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  button: {
    marginTop: 20,
    backgroundColor: "purple",
    paddingVertical: 12,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
