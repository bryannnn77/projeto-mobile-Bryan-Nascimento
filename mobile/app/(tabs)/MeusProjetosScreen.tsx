import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Linking } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const MeusProjetosScreen = () => {
  const projectsData = [
    {
      id: '1',
      title: 'Portfólio Pessoal',
      description: 'Nessa área vamos ter o caminho para acessar os meus antigos projetos no github, como o Agrinho, um projeto de um sistema de academia, entre outros. E teremos também o meu perfil do linkedin.',
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Meus Projetos</Text>

      {/* Lista de Projetos */}
      {projectsData.map((project) => (
        <View key={project.id} style={styles.projectCard}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}

      {/* Seção do GitHub (em cima) */}
      <View style={styles.linkSection}>
        <Text style={styles.linkText}>
          Para mais projetos, acesse:
        </Text>
        
        <Text 
          style={styles.link}
          onPress={() => Linking.openURL('https://github.com/bryannnn77')}
        >
          <AntDesign name="github" size={20} color="#333" /> github.com/bryannnn77
        </Text>
      </View>

      <Image
        source={require('@/assets/images/github.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Divisor visual */}
      <View style={styles.divider} />

      {/* Seção do LinkedIn (embaixo) */}
      <View style={styles.linkSection}>
        <Text style={styles.linkText}>
          Meu perfil profissional:
        </Text>
        
        <Text 
          style={styles.link}
          onPress={() => Linking.openURL('https://br.linkedin.com/in/bryan-nascimento-436978271?trk=people-guest_people_search-card')}
        >
          <FontAwesome name="linkedin-square" size={20} color="#0077B5" /> linkedin.com/in/bryan-nascimento
        </Text>
      </View>

      <Image
        source={require('@/assets/images/linkedin.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  linkSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 20,
  },
});

export default MeusProjetosScreen;