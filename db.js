const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:36433/suite');

const userSchema = new mongoose.Schema({
    id : Object,
    nome: String,
    whatsapp : String,
    historico_email : Boolean,
    habilitarAlerta : Boolean,
    requerAutenticacaoSempre : Boolean,
    contatoEhHumano : Boolean,
    classificacao : String,
    
}, { collection: 'clientes_users' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }