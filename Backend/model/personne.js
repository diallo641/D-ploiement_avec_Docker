const mongoose = require('mongoose');
const personneSchema=mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
        },
        prenom:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true,
            unique: true
        },
        telephone:
        {
            type: String,
            required: true,
            unique: true
        }
},
        {timestamps: true}
);

module.exports=mongoose.model('Personne',personneSchema);