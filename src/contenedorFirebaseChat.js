var admin = require("firebase-admin");
var serviceAccount = require("../ecommerce-15df5-firebase-adminsdk-8zs4l-2f834c66d5.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}); 

const db = admin.firestore()
const query = db.collection('chat')

class ContenedorFirebaseChat {
	async getById(id) {
		const document = await query.doc(id).get()
		return document.data()
	}

	async deleteById(id) {
		await query.doc(id).delete()
	}

	async save(object) {    
		console.log(object)
		// const product = await query.add(object)
		// object.id = object.id
		// query.doc(product.id).set(object)
		// return product.id
	}

	async getAll() {
		const snapshot = await query.get()
    	return snapshot.docs.map(doc => doc.data());
	}
}

module.exports = ContenedorFirebaseChat;