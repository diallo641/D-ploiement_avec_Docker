const deconnexionBtn = document.getElementById('deconnexion');
const ajouterPersonne = document.getElementById('ajout_personne');

//Deconnexion

deconnexionBtn.addEventListener('click', () => {
    window.location.href = "../index.html";
});

//Ajouter une personne
ajouterPersonne.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nom = document.getElementById('nom').value.trim();
    const prenom= document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const telephone = document.getElementById('telephone').value.trim();
    if(!nom || !prenom || !email || !telephone){
        alert('Veuillez remplir tous les champs.');
        return;
    }
    else{
        const response = await fetch('http://localhost:5000/api/personne/ajouterpersonne', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nom, prenom, email, telephone })
        });
        const data = await response.json();
        if(!response.ok){
            alert(data.message || 'Erreur lors de l\'ajout de la personne.');
        }
        else{
            alert('Personne ajoutée avec succès !');
            window.location.href = "personnes.html";
        }
    }
});


