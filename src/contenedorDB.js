const db = require('../db')

class ContenedorDB {

    async save(obj) {
        await db(process.env.T_PRODUCTOS).insert({title: obj.title, price:obj.price, thumbnail:obj.thumbnail[0]})
    }

    async getAll() {
       return await db(process.env.T_PRODUCTOS).select()
    }

    async deleteById(id) {
        await db(process.env.T_PRODUCTOS).from(this.tabla).where('id', id).del()
    }

    async deleteAll() {
        await db(process.env.T_PRODUCTOS).del()
    }
}

module.exports = ContenedorDB