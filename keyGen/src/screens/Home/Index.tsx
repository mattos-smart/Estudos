import React from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Styles } from "./Style";
import logo from "../../../assets/safePass.png";
import shieldIcon from "../../../assets/ShieldIcon.png";

export default function Home() {
  return (
    <View style={Styles.container}>
      <View style={Styles.containerLogo}>
        <Image source={logo} />
      </View>
      <View style={Styles.containerShield}>
        <Image source={shieldIcon} />
      </View>
      <View>
        <Text style={Styles.textVerde}>Segurança para</Text>
        <Text style={Styles.textVerde}>seu negócio</Text>
      </View>
      <Text style={Styles.textColor}>Gere uma senha aleatória para aumentar sua segurança nas redes sociais</Text>

      <View style={Styles.containerButtons}>
        <TextInput style={Styles.inputButton} placeholder="Sua nova senha fica aqui!" />

        <Text style={[Styles.generatorButton, Styles.bordarPadrao]}>Gerar senha</Text>
      </View>

      <View style={Styles.containerCopyButton}>
        <Text style={Styles.copyButton}>Copiar sua nova senha</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
