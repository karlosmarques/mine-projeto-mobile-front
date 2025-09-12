import React from 'react';
import { View, Text,TextInput, StyleSheet,FlatList,Image,SafeAreaView,TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const theOfficeImg = require('../../assets/images/capa-theoffice.jpg');
const interestelarImg = require('../../assets/images/interestelar.png');
const VozSilencioImg = require('../../assets/images/Koe-no-Katachi.jpg');
const PeacemakerImg = require('../../assets/images/peacemaker.jpg');
const SupermanImg = require('../../assets/images/superman.jpg');
const thunderImg = require('../../assets/images/thunderbolts.jpg');
const hanaImg = require('../../assets/images/hana.jpg');
const houseImg = require('../../assets/images/houseofthedragon.jpg');
const batmanImg = require('../../assets/images/batman.jpg');

const data = [
  { id: '1', title: 'Interestelar', image: interestelarImg },
  { id: '2', title: 'The Office', image: theOfficeImg },
  { id: '3', title: 'Voz do Silencio', image: VozSilencioImg },
  { id: '4', title: 'Peacemaker', image: PeacemakerImg },
  { id: '5', title: 'Superman', image: SupermanImg },
  { id: '6', title: 'Thunder', image: thunderImg },
  { id: '7', title: 'Kaoru Hana wa Rin to Saku', image: hanaImg },
  { id: '8', title: 'House of the Dragon', image: houseImg },
  { id: '9', title: 'Batman: caveleiro das trevas', image: batmanImg },
];

export default function App() {
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
     
        <Text style={styles.tabText}>Séries</Text>
        <Text style={styles.tabText}>Filmes</Text>
        <Text style={styles.tabText}>Animes</Text>
      </View>
      </View>

      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.image ? (
              <Image source={item.image} style={styles.cardImage} />
            ) : (
              <View style={styles.cardPlaceholder} />
            )}
            {item.title ? (
              <Text style={styles.cardTitle}>{item.title}</Text>
            ) : null}
          </View>
        )}
      />

     
      <View style={styles.bottomNav}>
        <Ionicons name="settings-outline" size={28} color="white" />
        <Ionicons name="heart-outline" size={36} color="white" />
         <TouchableOpacity onPress={() => router.push('/perfil')}>
          <Ionicons name="person-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // NAVBAR SUPERIOR (fundo azul com borda inferior)
  topNavContainer: {
    backgroundColor: '#2300ff',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },

  // BARRA DE PESQUISA
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

  // CATEGORIAS
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

  // GRID DE CARDS
  grid: {
    padding: 10,
    alignItems: 'center',
  },
  card: {
    width: 100,
    margin: 8,
    alignItems: 'center',
  },
  cardImage: {
    width: 90,
    height: 130,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cardPlaceholder: {
    width: 90,
    height: 130,
    borderRadius: 8,
    backgroundColor: '#ccc',
  },
  cardTitle: {
    marginTop: 6,
    textAlign: 'center',
    fontSize: 12,
  },

  // RODAPÉ
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 18,
    backgroundColor: '#2300ff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
  },
});
