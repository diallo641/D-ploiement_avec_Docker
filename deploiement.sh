#pour un deploiement local avec des images Docker déjà construites

echo "Lancer les conteneurs existants avec Docker Compose"

# Arrêter les containers existants (si besoin)
docker compose down

# Lancer les containers avec les images existantes
docker compose up -d

echo "Tout est lancé !"
echo "Frontend: http://localhost:3000"
echo "Backend: http://localhost:5000"
