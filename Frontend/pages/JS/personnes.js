const deconnexionBtn = document.getElementById('deconnexion');
const table=document.getElementById('table_personnes');
const taille=document.getElementById('taille');
const rechercher = document.getElementById('recherche');

//redirection vers la page d'accueil lors de la deconnexion
deconnexionBtn.addEventListener('click', () => {
    window.location.href = "../index.html";
});

function affichermessage(msg, couleur) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p class="${couleur}">${msg}</p>`;
}
//fonction pour afficher les personnes sur la liste
async function afficherPersonnes() {
    try{
        const response = await fetch('http://localhost:5000/api/personne/toutespersonnes', {
            method: "GET"
        });
        const data = await response.json();
        if(!data.personnes || data.personnes.length === 0){
            table.innerHTML = `<p class="text-center text-red-500 font-bold">Aucun utilisateur trouvé.</p>`;
            return;
        }
        else{
            table.innerHTML = '';
            taille.innerHTML=`${data.taille}`;
            data.personnes.forEach((personne) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td class="border px-4 py-2">${personne._id}</td>
                    <td class="border px-4 py-2">${personne.nom}</td>
                    <td class="border px-4 py-2">${personne.prenom}</td>
                    <td class="border px-4 py-2">${personne.email}</td>
                    <td class="border px-4 py-2">${personne.telephone}</td>
                `;
                table.appendChild(row);
            });

        }

    }
     catch(error){
        console.error("Erreur lors de la récupération des utilisateurs :", error);
        affichermessage();
    }
}

//Utiliser la fonction pour afficher les personnes au chargement de la page
afficherPersonnes();


rechercher.addEventListener('input', () => {
  const mot = rechercher.value.toLowerCase();
  const lignes = table.querySelectorAll('tr');
  let compteur = 0;

  lignes.forEach(ligne => {
    const texte = ligne.innerText.toLowerCase();

    if (texte.includes(mot)) {
      ligne.style.display = "";
      compteur++;
    } else {
      ligne.style.display = "none";
    }
  });
  taille.innerText = compteur;
});
