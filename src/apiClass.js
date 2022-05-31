import fs from 'fs'



export default class Api {
    contructor(rutaBD){
        this.rutaBD = __dirname + rutaBD
    }

    async findAll(){
        try{
            const todos = await fs.promises.readFile(this.rutaBD,"utf-8")
            return JSON.parse(todos)
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async findById(id){
        try {
            const todos = await this.findAll()
            const resultado = todos.find(e => e.id===id)
            return resultado
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }

    async create(obj){
        try {
            const todos = await this.findAll()
            let id
            todos.length === 0 ? id = 1 : id = todos[todos.length-1].id + 1
            todos.push({...obj,id})

            await fs.promises.writeFile(this.rutaBD,JSON.stringify(todos))
            return id
        } catch (error) {
            throw new Error(`Error: ${error}`)
        }
    }



}