# API de IA - Método 12P

Esta é uma API de inteligência artificial que responde perguntas sobre produtos usando dados mockados da empresa Método 12P. A API utiliza o Google Gemini para gerar respostas baseadas no contexto fornecido.

## URLs da API

- **Base URL**: `https://back-12-p.vercel.app/`
- **Endpoint de Status**: `GET https://back-12-p.vercel.app/`
- **Endpoint de IA**: `POST https://back-12-p.vercel.app/ai`

## Como Consumir a API

### 1. Verificar Status da API

Faça uma requisição GET para verificar se a API está funcionando:

```bash
curl -X GET https://back-12-p.vercel.app/
```

**Resposta esperada:**
```
API de IA - Método 12P
```

### 2. Fazer uma Pergunta para a IA

Envie uma requisição POST para o endpoint `/ai` com os parâmetros necessários.

#### Headers
```
Content-Type: application/json
```

#### Parâmetros do Body (JSON)
- `pergunta` (obrigatório): A pergunta que você deseja fazer sobre os produtos.
- `contexto` (opcional): Contexto adicional em formato de string JSON. Se não fornecido, usa os dados mockados automaticamente.
- `nomeEmpresa` (opcional): Nome da empresa. Se não fornecido, usa "Método 12P".

#### Exemplos de Requisições

##### Exemplo 1: Pergunta simples (usa contexto padrão)
```bash
curl -X POST https://back-12-p.vercel.app/ai \
  -H "Content-Type: application/json" \
  -d '{
    "pergunta": "Quais produtos estão disponíveis?"
  }'
```

##### Exemplo 2: Pergunta com contexto personalizado
```bash
curl -X POST https://back-12-p.vercel.app/ai \
  -H "Content-Type: application/json" \
  -d '{
    "pergunta": "Qual é o produto mais vendido?",
    "contexto": "{\"produtos\": [{\"nome\": \"Fone Bluetooth\", \"preco\": 150}]}",
    "nomeEmpresa": "Minha Empresa"
  }'
```

##### Exemplo 3: Usando JavaScript (fetch)
```javascript
fetch('https://back-12-p.vercel.app/ai', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    pergunta: 'Quanto custa o Mouse Gamer?'
  })
})
.then(response => response.json())
.then(data => console.log(data.resposta))
.catch(error => console.error('Erro:', error));
```

### Resposta da API

A API retorna um JSON com a resposta da IA:

```json
{
  "resposta": "Resposta gerada pela IA baseada na sua pergunta."
}
```

Em caso de erro, retorna:

```json
{
  "error": "Descrição do erro"
}
```

## Deploy na Vercel

1. Faça o fork ou clone este repositório.
2. Configure a variável de ambiente `GEMINI_API_KEY` no painel da Vercel (Settings > Environment Variables) com sua chave do Google AI Studio.
3. Conecte o repositório à Vercel e faça o deploy automático.

## Desenvolvimento Local

1. Clone o repositório.
2. Instale as dependências: `npm install`.
3. Configure o arquivo `.env` com `GEMINI_API_KEY=your_api_key`.
4. Execute o servidor: `npm run start` (usa `api/index.ts`).
5. Ou para desenvolvimento: `npm run dev` (se configurado).

## Tecnologias Utilizadas

- Node.js
- Express.js
- Google Generative AI (Gemini)
- TypeScript
- Vercel (deploy)

#### Exemplo 3: Com contexto customizado

```json
{
  "pergunta": "Quais produtos você recomenda?",
  "contexto": "{\"produtos\": [{\"nome\": \"Produto A\", \"preco\": 10}]}",
  "nomeEmpresa": "Minha Loja"
}
```

### Resposta

#### Sucesso (200)

```json
{
  "resposta": "Resposta gerada pela IA em português brasileiro"
}
```

#### Erro (400/500)

```json
{
  "error": "Mensagem de erro"
}
```

## Funcionalidades

- Respostas em português brasileiro
- Baseada em dados de produtos, fornecedores e empresa
- Usa IA generativa (Google Gemini) para respostas contextuais
- Suporte a contexto customizado ou dados mockados padrão

## Dados Mockados Incluídos

- **Empresa**: Metodo 12P (informações completas)
- **3 Fornecedores**: Shenzhen Tech Co., Guangzhou Accessories Ltd., Yiwu Gadgets Factory
- **15 Produtos**: Eletrônicos, acessórios, iluminação, utilidades

## Desenvolvimento Local

1. Instale as dependências: `npm install`
2. Configure o arquivo `.env` com `GEMINI_API_KEY`
3. Execute: `npm start`
4. A API estará disponível em `http://localhost:3000`

## Tecnologias

- Node.js
- Express
- TypeScript
- Google Generative AI (Gemini)
- Vercel (deploy)