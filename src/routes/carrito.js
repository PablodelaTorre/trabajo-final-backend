import { Router } from "express";
import Api from '../apiClass'

const router = Router()
const api = new Api("/dataBase/carritos.json")

const isAdmin = true

function adminOrClient(req,res,next){
    if(!isAdmin){
        res.send("No tienes acceso a esta ruta")
    } else {
        next()
    }
}

router.get('/:id/productos', async (req,res) => {
    const {id} = req.params
    const product = await api.findById(id)
    res.json(product)
})

router.post('/',adminOrClient, async (req,res) => {
    const obj = req.body
    const product = await api.create(obj)
    res.json(product)
})

router.post('/:id/productos',adminOrClient, async (req,res) => {
    const obj = req.body
    const product = await api.create(obj)
    res.json(product)
})

router.delete('/:id',adminOrClient, async (req,res) => {
    const obj = req.body
    const product = await api.create(obj)
    res.json(product)
})


router.delete('/:id/productos/:id_prod',adminOrClient, async (req,res) => {
    const obj = req.body
    const product = await api.create(obj)
    res.json(product)
})



export default router