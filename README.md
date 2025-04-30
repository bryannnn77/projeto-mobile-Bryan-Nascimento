<h1 align="center">Assistente Virtual com OpenAI - React Native</h1>

<h2>📝 Descrição</h2>
<p>Este projeto implementa um chat interativo que se comunica com a API da OpenAI (GPT-3.5-turbo) em um aplicativo React Native.</p>

<h3>Principais recursos:</h3>
<ul>
  <li>Histórico de conversa com estilos diferenciados para usuário e bot</li>
  <li>Campo de entrada com botão de envio</li>
  <li>Tratamento de erros e respostas alternativas</li>
  <li>Ajustes automáticos para o teclado virtual</li>
</ul>

<h2>🛠 Tecnologias Utilizadas</h2>
<ul>
  <li>React Native</li>
  <li>Expo</li>
  <li>API OpenAI (GPT-3.5-turbo)</li>
  <li>react-native-paper (para componentes UI)</li>
  <li>ParallaxScrollView (para efeito visual)</li>
</ul>

<h2>🔧 Configuração</h2>
<ol>
  <li>Clone o repositório</li>
  <li>Instale as dependências:
    <pre><code>npm install
# ou
yarn install</code></pre>
  </li>
  <li>Configure sua chave da API OpenAI:
    <ul>
      <li>Crie um arquivo <code>.env</code> na raiz do projeto</li>
      <li>Adicione:
        <pre><code>OPENAI_API_KEY=sua_chave_aqui</code></pre>
      </li>
    </ul>
  </li>
  <li>Execute o projeto:
    <pre><code>npm start
# ou
yarn start</code></pre>
  </li>
</ol>

<h2>🎨 Componentes Principais</h2>
<h3><code>TabTwoScreen</code></h3>
<p>Componente principal que gerencia:</p>
<ul>
  <li>Estado das mensagens</li>
  <li>Interação com a API</li>
  <li>Renderização da interface</li>
</ul>

<h3>Funcionalidades:</h3>
<ul>
  <li>Envio assíncrono de mensagens</li>
  <li>Respostas do assistente virtual</li>
  <li>Fallback para erros de conexão</li>
  <li>Rolagem automática para novas mensagens</li>
  <li>Ajuste para teclado virtual</li>
</ul>

<h2>🚀 Como Usar</h2>
<ol>
  <li>Digite sua mensagem no campo de texto inferior</li>
  <li>Pressione "Enviar" ou tecle "Enter"</li>
  <li>Aguarde a resposta do assistente virtual</li>
  <li>A conversa será exibida no histórico acima</li>
</ol>

<h2>⚙️ Personalização</h2>
<p>Você pode modificar:</p>
<ul>
  <li><code>system prompt</code> na chamada da API para alterar o comportamento do bot</li>
  <li>Estilos no objeto <code>StyleSheet</code></li>
  <li>Mensagens de fallback no tratamento de erros</li>
  <li>Modelo do GPT (na configuração da API)</li>
</ul>

<h2>📱 Compatibilidade</h2>
<p>Testado em:</p>
<ul>
  <li>iOS (com comportamento específico para teclado)</li>
  <li>Android</li>
  <li>Ambos os modos claro e escuro</li>
</ul>

<h2>📄 Licença</h2>
<p>Este projeto está sob a licença MIT.</p>
