const express = require("express")
const rotalivro = require("./rotas/livros")

const app = express()

app.use(express.json())

app.use('/livros', rotalivro)

const port = 8000


app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})