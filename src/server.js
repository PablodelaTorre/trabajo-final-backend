import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))



const PORT = 8080
app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})