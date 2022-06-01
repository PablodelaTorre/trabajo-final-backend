import fs from 'fs'

export default class Api {
    constructor(rutaBD){
        this.rutaBD =__dirname + rutaBD
    }
    async findAll(){
        try {
            const productos = await fs.promises.readFile(this.rutaBD,'utf-8')
            return JSON.parse(productos)
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findById(id){
        try {
            const productos = await this.findAll()
            const resultado = productos.find(e => e.id==id)
            return resultado
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async create(obj){
        try {
            const productos = await this.findAll()
            let id
            productos.length === 0 ? id = 1 : id = productos[productos.length-1].id + 1
            productos.push({...obj,id})

            await fs.promises.writeFile(this.rutaBD,JSON.stringify(productos))
            return id
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async actualizarP(id,product){
        try {
            let producto = await this.findById(id)
            let prod = {...product,id}
            if (producto) {
                producto = prod
                const productos = await this.findAll()
                productos.push(producto)
                await fs.promises.writeFile(this.rutaBD,Json.stringify(productos))
        }   else {
            console.log('Producto no encontrado')
        }    
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
        
    }

    async deleteP(id){
        try {
            const productos = await this.findAll().filter(p => p.id !== Number(id))
            await fs.promises.writeFile(this.rutaBD,Json.stringify(productos))
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
        
    }

}