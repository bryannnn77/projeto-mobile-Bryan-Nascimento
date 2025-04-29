import { StyleSheet, Image, TextInput, View, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState, useRef } from 'react';
import { Button } from 'react-native-paper';
import React from 'react';

export default function TabTwoScreen() {
  const [messages, setMessages] = useState([
    { text: 'Olá! Sou seu assistente virtual. Como posso te ajudar hoje?', user: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    setIsLoading(true);
    const userMessage = { text: inputText, user: 'you' };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer SUA_CHAVE_API' // minha chave api, ADICIONAR DEPOIS
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'Você é um assistente útil que responde em português brasileiro de forma clara e concisa.'
            },
            { role: 'user', content: inputText }
          ],
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Erro na API');
      }

      const data = await response.json();
      const botMessage = {
        text: data.choices[0]?.message?.content || 'Não entendi sua pergunta...',
        user: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Erro na API:', error);
      const fallbackResponses = [
        "Estou com dificuldades técnicas no momento.",
        "Podemos tentar novamente mais tarde?",
        "No momento não consigo responder adequadamente."
      ];

      setMessages(prev => [...prev, {
        text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        user: 'bot'
      }]);
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
        <ThemedText type="title">Assistente Virtual</ThemedText>
      </ThemedView>

      <ScrollView
        style={styles.messagesContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((msg, index) => (
          <ThemedView
            key={index}
            style={[
              styles.messageBubble,
              msg.user === 'you' ? styles.userBubble : styles.botBubble
            ]}
          >
            <ThemedText style={msg.user === 'you' ? styles.userText : styles.botText}>
              {msg.text}
            </ThemedText>
          </ThemedView>
        ))}
      </ScrollView>

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
          editable={!isLoading}
        />
        <Button
          mode="contained"
          onPress={handleSendMessage}
          loading={isLoading}
          disabled={isLoading}
          style={styles.sendButton}
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
    marginBottom: 20,
    paddingTop: 10,
  },
  messagesContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 18,
    marginVertical: 6,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F1F1',
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 24,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    borderRadius: 24,
  },
});