import React from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { UserPhoto } from "../UserPhoto";
import LogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <View style={styles.container}>
      <LogoSvg />
      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
        <UserPhoto imageUri="http://github.com/marlloncampos.png" />
      </View>
    </View>
  );
}
