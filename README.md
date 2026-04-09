# Valérie Finance (VF)

Application premium de gestion de tontine digitale, sécurisée et intuitive.

## 🚀 Technologies
- **Frontend** : Next.js 15 (App Router)
- **Design** : Vanilla CSS (Glassmorphism, Minimalist Icons)
- **Backend** : Insforge (PostgreSQL + BaaS)
- **PWA** : Compatible installation mobile et accès hors-ligne.

## 🐳 Déploiement avec Docker & Dokploy

Le projet est pré-configuré pour être déployé sur **Dokploy**.

### Pré-requis
1. Un serveur avec Dokploy installé.
2. Un compte sur **Insforge.dev**.

### Variables d'environnement
Configurez les variables suivantes dans votre interface Dokploy :
- `NEXT_PUBLIC_INSFORGE_URL` : L'URL de votre API Insforge.
- `INSFORGE_API_KEY` : Votre clé secrète Insforge.
- `NODE_ENV` : `production`

### Déploiement local
```bash
docker-compose up --build
```

## 🔐 Philosophie "Zéro Friction"
Ce projet suit une orientation stricte :
- **1 écran = 1 fonction**.
- Pas d'emojis, uniquement des icônes SVG minimalistes.
- Gamification discrète pour encourager les cotisations à temps.
