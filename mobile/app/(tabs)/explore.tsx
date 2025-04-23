import { StyleSheet, Image, TextInput, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Button } from 'react-native-paper';

export default function TabTwoScreen() {
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou seu assistente. Como posso ajudar?', user: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    const userMessage = { text: inputText, user: 'you' };
    setMessages([...messages, userMessage]);
    setInputText('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SUA_CHAVE_API' // 👈 Substitua pela sua chave!
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'Você é um assistente prestativo.' },
            { role: 'user', content: inputText }
          ],
        }),
      });

      const data = await response.json();
      const botMessage = { 
        text: data.choices[0]?.message?.content || 'Não entendi...', 
        user: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao chamar OpenAI:', error);
      setMessages(prev => [...prev, { text: 'Erro ao conectar com o chatbot.', user: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#abb8c2', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/chatgpticon.webp')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chatbot</ThemedText>
      </ThemedView>

      {/* Área de Mensagens */}
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <ThemedView 
            key={index} 
            style={[
              styles.messageBubble, 
              msg.user === 'you' ? styles.userBubble : styles.botBubble
            ]}
          >
            <ThemedText style={styles.messageText}>{msg.text}</ThemedText>
          </ThemedView>
        ))}
      </ScrollView>

      {/* Input de Mensagem */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={inputText}
          onChangeText={setInputText}
          onSubmitEditing={handleSendMessage}
        />
        <Button 
          mode="contained" 
          onPress={handleSendMessage}
          loading={isLoading}
          disabled={isLoading}
        >
          Enviar
        </Button>
      </KeyboardAvoidingView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 245,
    width: 550,
    bottom: 2,
    left: -105,
    position: 'absolute',
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
    maxHeight: 400,
  },  
  messageBubble: {
    padding: 12,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECECEC',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginRight: 8,
  },
}); 