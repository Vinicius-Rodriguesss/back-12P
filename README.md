# API de IA - Metodo 12P

Esta é uma API de inteligência artificial que responde perguntas sobre produtos usando dados mockados da empresa Metodo 12P.

## Deploy na Vercel

1. Faça o fork ou clone este repositório
2. Configure a variável de ambiente `GEMINI_API_KEY` no painel da Vercel (Settings > Environment Variables)
3. Conecte o repositório à Vercel e faça o deploy

## Como Consumir a API

### Endpoint

`POST https://seu-dominio.vercel.app/ai`

### Headers

```
Content-Type: application/json
```

### Body (JSON)

```json
{
  "pergunta": "Sua pergunta aqui",
  "contexto": "Contexto opcional em formato JSON string",
  "nomeEmpresa": "Nome da empresa opcional"
}
```

### Exemplos

#### Exemplo 1: Pergunta simples (usa dados mockados automaticamente)

```json
{
  "pergunta": "Quais produtos estão disponíveis?"
}
```

#### Exemplo 2: Pergunta específica

```json
{
  "pergunta": "Qual o preço do Fone Bluetooth TWS?"
}
```

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