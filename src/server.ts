
import express from 'express'
import 'dotenv/config'
import { gerarRespostaProduto } from '../AI/generate.js'
import estoque from '../AI/Mock/index.js'



const app = express()
const port = 5005

app.use(express.json())

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.post('/ai', async (req, res) => {
  try {
    const { pergunta, contexto, nomeEmpresa } = req.body
    if (!pergunta) {
      return res.status(400).json({ error: 'Pergunta é obrigatória' })
    }
    const contextoFinal = contexto || JSON.stringify(estoque)
    const nomeEmpresaFinal = nomeEmpresa || estoque.empresa.nome
    const resposta = await gerarRespostaProduto({ pergunta, contexto: contextoFinal, nomeEmpresa: nomeEmpresaFinal })
    res.json({ resposta })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao processar a pergunta' })
  }
})

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})
