const mongoose= require('mongoose');
const personModel= require('../model/personne');

//Ajouter une nouvelle personne
module.exports.ajouterpersonne = async(req, res) =>
{
    const {nom, prenom, email, telephone}= req.body;
    try{
        if(!nom || !prenom || !email || !telephone)
        {
            return res.status(400).json({msg: "Veuillez remplir tous les champs"});
        }
        else{
            const emailunique = await personModel.findOne({email: email});
            const telephoneunique = await personModel.findOne({telephone: telephone});
            if(emailunique){
                return res.status(400).json({message: "Email existe deja pour une autre personne"})
            }
            else
            {
                if(telephoneunique){
                    return res.status(400).json({message: "Telephone existe deja pour une autre personne"})
                }
                else{
                    const nouvellepersonne = await personModel.create(req.body);
                    return res.status(201).json({message: "Personne ajoutée avec succès", 
                                                nom: nouvellepersonne.nom,
                                                prenom: nouvellepersonne.prenom,
                                                email: nouvellepersonne.email,
                                                telephone: nouvellepersonne.telephone});
                }
            }
        }
    } catch(error){
        console.error("Erreur serveur :", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
};

//Avoir une seule personne
module.exports.unepersonne = async(req, res) =>
{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message: "Id fournit est invalide"});
    }
    else{
        try{
            const personne = await personModel.findById(id);
            if(!personne){
                return res.status(404).json({message:"Aucune personne trouvée avec cet Id"});
            }
            else{
                return res.status(200).json({message: "Voici les informations de la personne demandée",
                                            nom: personne.nom,
                                            prenom: personne.prenom,
                                            email: personne.email,
                                            telephone: personne.telephone});
            }
        }
        catch(error){
        console.error("Erreur serveur :", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }

    }
};

//liste toutes les personnes
module.exports.personnes = async(req, res) =>
{
    const listepersonnes = await personModel.find({});
    if(listepersonnes.length === 0){
        return res.status(404).json({message: "Aucune personne n'a encore été ajoutée"});
    }
    return res.status(200).json({message: "Voici la liste des personnes", 
                                personnes: listepersonnes,
                                taille: listepersonnes.length
                            });
                            
}

//Modifier un eutilisateur

module.exports.editerpersonne = async(req, res) =>
{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message: "Id fournit est invalide"});
    }
    else{
        try{
            const personneexistant = await personModel.findById(id);
            if(!personneexistant){
                return res.status(404).json({message:"Aucune personne trouvée avec cet Id"});
            }
            else{
                const emaildejautilise = await personModel.findOne({email: req.body.email});
                const telephonedejautilise = await personModel.findOne({telephone: req.body.telephone});
                if(emaildejautilise && emaildejautilise._id.toString() !== id){
                    return res.status(400).json({message: "Email deja utilisé par une autre personne"});
                }
                if(telephonedejautilise && telephonedejautilise._id.toString() !== id){
                    return res.status(400).json({message: "Telephone deja utilisé par une autre personne"});
                }
                const personne = await personModel.findByIdAndUpdate(id, req.body, {new: true});
                return res.status(200).json({message: "Personne modifiée avec succès", 
                             nom: personne.nom,
                             prenom: personne.prenom,
                             email: personne.email,
                             telephone: personne.telephone,
                    });

            }
        }
        catch(error){
        console.error("Erreur serveur :", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
    }
};

//supprimer une personne
module.exports.supprimerpersonne = async(req, res) =>
{
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message: "Id fournit est invalide"});
    }
    else{
        try{
            const personneexiste = await personModel.findById(id);
            if(!personneexiste){
                return res.status(404).json({message:"Aucune personne trouvée avec cet Id"});
            }
            else{
                await personModel.findByIdAndDelete(id);
                return res.status(200).json({message: "Personne supprimée avec succès"});
            }
        }
        catch(error){
        console.error("Erreur serveur :", error);
        return res.status(500).json({ message: "Erreur interne du serveur" });
    }
}
};
