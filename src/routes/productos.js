import { Router } from "express";
import Api from '../apiClass'

const router = Router()
const api = new Api("/dataBase/productos.json")

router.get('/', async (req,res) => {
    const products = await api.findAll()
    res.json(products)
})

router.get('/:id', async (req,res) => {
    const {id} = req.params
    const product = await api.findById(id)
    res.json(product)
})

router.post('/', async (req,res) => {
    const obj = req.body
    const product = await api.create(obj)
    res.json(product)
})





export default router