# 🍽️ La Case Ronde - Site Web Restaurant

> 🌐 [Voir le site en direct](https://fygs.github.io/formation-anumerique-html-css/)

## 📝 Description
Site web moderne et élégant pour le restaurant gastronomique "La Case Ronde". Ce projet démontre l'utilisation des meilleures pratiques en développement web front-end, avec un focus sur l'expérience utilisateur et le design responsive.

## ✨ Caractéristiques

### 🎯 Pages Principales
- **Accueil** : Présentation élégante avec hero section et caractéristiques clés
- **Menu** : Carte interactive avec animations subtiles
- **Contact** : Formulaire de réservation et informations pratiques

### 🎨 Design
- Interface utilisateur moderne et intuitive
- Animations fluides et élégantes
- Design responsive (mobile, tablette, desktop)
- Typographie soignée avec Google Fonts

### 🛠️ Technologies Utilisées
- HTML5 sémantique
- CSS3 moderne
  - Flexbox
  - Grid
  - Variables CSS
  - Animations
  - Media Queries

## 📱 Responsive Design
Le site s'adapte parfaitement à toutes les tailles d'écran :
- 📱 Mobile (< 768px)
- 📱 Tablette (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🎯 Structure du Projet
```
la-case-ronde/
├── index.html      # Page d'accueil
├── menu.html       # Page du menu
├── contact.html    # Page de contact
├── styles.css      # Styles globaux
└── README.md       # Documentation
```

## 💡 Fonctionnalités Clés

### Header
- Navigation responsive
- Logo élégant
- Menu de navigation intuitif

### Page d'Accueil
- Hero section avec appel à l'action
- Présentation des caractéristiques clés
- Design immersif

### Page Menu
- Présentation claire des plats
- Catégories bien organisées
- Prix et descriptions détaillées

### Page Contact
- Formulaire de réservation intuitif
- Informations de contact
- Carte interactive (à implémenter)

## 🚀 Améliorations Possibles
1. Intégration d'une carte Google Maps
2. Système de réservation en ligne
3. Galerie photos
4. Menu multilingue
5. Animations au scroll
6. Section avis clients

## 📚 Guide de Style

### 🎨 Couleurs
- Principal : `#2c3e50`
- Accent : `#e74c3c`
- Texte : `#2c3e50`
- Fond clair : `#f8f9fa`
- Blanc : `#ffffff`

### 🔤 Typographie
- Titres : `Playfair Display`
- Corps : `Poppins`

## 🖼️ Ressources Statiques

### 📸 Images
- **Hero Section (Accueil)**: [Restaurant Interior](https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3)
- **Menu Background**: [Food Plating](https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3)
- **Contact Background**: [Restaurant Exterior](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3)

### 🔤 Polices Google Fonts
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Pour les titres
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
  ```
- [Poppins](https://fonts.google.com/specimen/Poppins) - Pour le texte
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
  ```

### 🎨 Palette de Couleurs
```css
:root {
  --primary-color: #2c3e50;    /* Bleu foncé */
  --accent-color: #e74c3c;     /* Rouge vif */
  --text-color: #2c3e50;       /* Texte principal */
  --light-bg: #f8f9fa;         /* Arrière-plan clair */
  --white: #ffffff;            /* Blanc */
}
```

### 🏷️ Étiquettes de Cuisine
```css
/* Afrique */
background-color: #f39c12;     /* Orange */

/* France */
background-color: #3498db;     /* Bleu */

/* Asie */
background-color: #e74c3c;     /* Rouge */
```

### 🔄 Animations
```css
/* Transition globale */
--transition: all 0.3s ease;

/* Animation de fondu */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 📱 Points de Rupture Responsive
```css
/* Mobile */
@media (max-width: 768px) { ... }

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) { ... }

/* Desktop */
@media (min-width: 1025px) { ... }
```

### 🛡️ Attributions
Toutes les images sont sous licence [Unsplash](https://unsplash.com/license), libres d'utilisation pour des projets commerciaux et non-commerciaux.

## 🔧 Configuration Git

### 📥 Créer un nouveau repository

```bash
# Initialiser le projet
echo "# la-case-ronde-restaurant" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main

# Lier au repository distant
git remote add origin https://github.com/[VOTRE-USERNAME]/la-case-ronde-restaurant.git
git push -u origin main
```

### 🔄 Pousser un repository existant

```bash
# Lier au repository distant
git remote add origin https://github.com/[VOTRE-USERNAME]/la-case-ronde-restaurant.git
git branch -M main
git push -u origin main
```

### 📋 Commandes Git courantes

```bash
# Vérifier l'état des fichiers
git status

# Ajouter des fichiers au staging
git add .                  # Tous les fichiers
git add [nom-fichier]      # Fichier spécifique

# Créer un commit
git commit -m "message"

# Pousser les changements
git push origin main

# Récupérer les changements
git pull origin main

# Voir l'historique des commits
git log
```

### 🌿 Gestion des branches

```bash
# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Changer de branche
git checkout [nom-branche]

# Lister les branches
git branch

# Fusionner une branche
git merge [nom-branche]
```

### ⚙️ Configuration initiale

```bash
# Configurer l'identité
git config --global user.name "Votre Nom"
git config --global user.email "votre@email.com"

# Vérifier la configuration
git config --list
```

### 🔍 Fichiers à ignorer
Créez un fichier `.gitignore` à la racine du projet :

```plaintext
# Fichiers système
.DS_Store
Thumbs.db

# Fichiers d'éditeur
.vscode/
.idea/
*.sublime-project
*.sublime-workspace

# Fichiers de dépendances
node_modules/
vendor/

# Fichiers de build
dist/
build/

# Fichiers de configuration locaux
.env
.env.local
```

## 💻 Installation
1. Clonez le repository
2. Ouvrez `index.html` dans votre navigateur
3. Aucune dépendance requise !

## 🤝 Contribution
Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License
Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---
Créé avec ❤️ pour La Case Ronde
