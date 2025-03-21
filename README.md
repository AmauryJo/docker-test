# 🛠 API HACK

Bienvenue dans le projet **API HACK** ! Voici un guide détaillé pour configurer et lancer le projet sur votre machine locale.

## 👋 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/)

## 🗂 Installation

### ♻️ Démarrer le projet

L'installation et la configuration sont simplifiées grâce à Docker. Pour lancer le projet, exécutez simplement la commande suivante :

```bash
docker compose up -d
```

Cette commande va automatiquement :
- Construire et démarrer les conteneurs (base de données, API, etc.)
- Configurer la base de données

Une fois le projet lancé, l'API sera disponible à l'adresse `http://localhost:3000` (par défaut).

### 🔑 Identifiant Admin

Utilisateur : `kevin`
Mot de passe : `niel`

### 🖥️ Technologies utilisées

- Node.js et Express
- MySQL (via Docker)
- Docker Compose pour la gestion des services

