const connectBtn = document.getElementById('connexion');
const email = document.getElementById('email');
const password = document.getElementById('mot_de_passe');
const messageDiv = document.getElementById('message');

connectBtn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    if(!emailValue || !passwordValue){
        alert('Veuillez remplir tous les champs.');
        return;
    }
    else{
        try{
            if(emailValue=="admin@gmail.com" && passwordValue=="admin123!"){
                messageDiv.innerHTML = `<p class="text-green-500">Connexion réussie</p>`;
                window.location.href = "pages/personnes.html";
            }
        }
        catch(error){
            console.error('Erreur lors de la connexion :', error);
            alert('Une erreur est survenue lors de la connexion. Veuillez réessayer.');
            
        }
    }
}); 