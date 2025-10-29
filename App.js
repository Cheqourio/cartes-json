import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, TextInput } from 'react-native';
import { CardList } from './components/CardList';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />
      
      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un composant..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Liste filtrée */}
      <CardList searchQuery={searchQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },
  searchContainer: {
    marginTop: 20, // 🔹 éloigne la barre du haut
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
});