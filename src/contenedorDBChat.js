const db = require('../db')

class ContenedorDBChat {

    async save(obj) {
        console.log(obj)
        await db(process.env.T_CHAT).insert({id: obj.id, userId: obj.userId, message: obj.message})
    }

    async getAll() {
       return await db(process.env.T_CHAT).select()
    }

    async deleteById(id) {
        await db(process.env.T_CHAT).from(this.tabla).where('id', id).del()
    }

    async deleteAll() {
        await db(process.env.T_CHAT).del()
    }
}

module.exports = ContenedorDBChat