import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ['Início', 'Séries', 'Filmes', 'Animes'];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.topNavContainer}>
       
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <Ionicons name="search" size={20} color="#000" />
        </View>

        <View style={styles.tabContainer}>
          {categories.map((cat, index) => (
            <Text key={index} style={styles.tabText}>
              {cat}
            </Text>
          ))}
        </View>
      </View>

     
      <View style={styles.profileContent}>
        <View style={styles.avatar}>
          <Ionicons name="person-outline" size={80} color="#000" />
        </View>
        <Text style={styles.username}>Usuário</Text>
        <Text style={styles.email}>Email</Text>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.bottomNav}>
        <Ionicons name="settings-outline" size={28} color="white" />
        <Ionicons name="heart-outline" size={36} color="white" />
        <Ionicons name="person-outline" size={28} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },


  topNavContainer: {
    backgroundColor: '#2300ff',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    width: '90%',
    height: 40,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: 5,
  },
  tabText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },

  // Conteúdo do perfil centralizado
  profileContent: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#e3e3e3',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    marginBottom: 8,
    color: '#000',
  },
  email: {
    fontSize: 16,
    marginBottom: 30,
    color: '#000',
  },

  // Botão sair vermelho arredondado
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 30,
  },
  logoutText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Rodapé azul com ícones
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#2300ff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
