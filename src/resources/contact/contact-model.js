import mongoose from 'mongoose'

// Creamos un Schema con Mongoose para definir las características de los contactos en nuestra base de datos.
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
        required: true
    }
})

contactSchema.index({ users: 1, name: 1 }, { unique: true })

export const Contact = mongoose.model('contacts', contactSchema)
    /*  Breve explicación:
        Recordemos que MongoDB es una DB muy flexible y nos otorga total libertad en la data que almacenamos.
        Para tener un orden y control sobre como almacenamos los datos Mongoose nos permite la creación de Schemas.
        
        -Schema: Define reglas sobre los documentos(data) en MongoDB, añadiendo forma y estructura a nuestra data.
        -Model: Es el constructor para crear documentos(data) en base al Schema definido.
     
    */