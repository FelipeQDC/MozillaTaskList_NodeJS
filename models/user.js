var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
nome: {
unique: true,
type: String
},
hash: String,
salt: String,

admin: {
type: Boolean
},
},
{
versionKey: false
}
);
module.exports = mongoose.model('User', userSchema)