import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#abb8c2', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/gow-Photoroom.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Seja bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bryan Nascimento</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Atualmente, estou cursando o 3°ano do Ensino Médio técnico de Análise e projeto de sistemas.</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          Nesse site, tenho como objetivo mostrar a minha trajetória acadêmica, até o momento.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Minha Biografia</ThemedText>
        <ThemedText>
        Nasceu em uma família de classe média de Seattle. Seu pai, William H. Gates, era advogado de grandes empresas, e sua mãe,
         Mary Maxwell Gates, foi professora da Universidade de Washington e diretora de bancos. Bill Gates e as suas duas irmãs, Kristanne e Libby, 
         frequentaram as melhores escolas particulares de sua cidade natal, e Bill também participou do Movimento Escoteiro ainda quando jovem. Bill Gates,
         foi admitido na prestigiosa Universidade Harvard, conseguindo 1 590 SATs dos 1 600 possíveis mas abandonou os cursos de Matemática e Direito no 
         terceiro ano, para dedicar-se à Microsoft.{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 260,
    width: 280,
    bottom: 0,
    left: 15,
    position: 'absolute',
  },
});
