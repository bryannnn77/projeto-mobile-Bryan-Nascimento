import { StyleSheet, Image, TextInput, View, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Button } from 'react-native-paper';
import { OPENAI_API_KEY } from '@env';

const openaiConfig = {
  baseUrl: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  }
};

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
      const response = await fetch(`${openaiConfig.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: openaiConfig.headers,
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Você é um assistente prestativo." },
            { role: "user", content: inputText }
          ],
        }),
      });

      const data = await response.json();
      
      if (!response.ok) throw new Error(data.error?.message || 'Erro na API');

      const botMessage = { 
        text: data.choices[0]?.message?.content || 'Não entendi...', 
        user: 'bot' 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro detalhado:', error);
      setMessages(prev => [...prev, { 
        text: 'Erro ao conectar com o chatbot. Verifique o console.',
        user: 'bot' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    </KeyboardAvoidingView>
  );
}
