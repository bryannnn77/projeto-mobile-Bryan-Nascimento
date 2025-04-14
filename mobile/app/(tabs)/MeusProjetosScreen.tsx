// src/screens/MeusProjetosScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Tipagem para um projeto individual (opcional)
type Project = {
  id: string;
  title: string;
  description: string;
};

// Dados mockados (substitua por sua API/renderização dinâmica)
const projectsData: Project[] = [
  {
    id: '1',
    title: 'Site Pessoal',
    description: 'Um portfolio desenvolvido com React e TypeScript.',
  },
  {
    id: '2',
    title: 'App de Tarefas',
    description: 'Aplicativo para gerenciar tarefas diárias.',
  },
];

const MeusProjetosScreen: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meus Projetos</Text>
      
      {projectsData.map((project) => (
        <View key={project.id} style={styles.projectCard}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#444',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default MeusProjetosScreen;