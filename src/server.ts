import express from 'express'

const app = express()

app.get('/', (req, res) => {
    return res.json({
        sexo: "sexo"
    })
})

app.listen(3333)
