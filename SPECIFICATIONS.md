# Cahier des charges : CopieTachePronot

## **Introduction**

Le présent document vise à définir les spécifications et les exigences pour le développement de l'application web _CopieTachePronot_.
Le projet a pour objectif de concevoir, développer et déployer une application web permettant la gestion administrative, scolaire et de nombreuses autres foncionnalitées, une vieille copie tache de l'application _Pronot_.

## **Description du projet**

### Contexte

- Pour nos études aux lycée, nous avons suivit la **spécialité Maths et NSI (Numérique Sciences de l'Informatique)** pour notre BAC. Notre spécialité NSI nous propose de développé _un gros projet_ sur lequel nous serons évalué sur :
    - **Le carnet de bord**, notamment _sa tenue_ et le _travail de chacun._
    - **Le projet dans son ensemble**, notamment _la spécification du code_, _l'implémentation des fonctions_, _qualité et clarté du code_ et _fonctionnement du projet._
    - Et dans un dernier temps, **la soutenance orale.**
- Ce projet sera également soumis aux concours **"Les Trophées NSI"**, si les béligérants du projets le souhaite, pour lesqules nous serons récompensé.

### Fonctionnalités principales

1. Une mini IA sera implémenter, Bixbie :
    - Capable de calculer la moyenne des élèves
    - Capable de remonter le morale des élèves en leur racontant une blague
    - Lancer des petit jeu
    - Dialoguer
    - Pas d'Historique dans le temps
    - ...
2. Un Agenda pour les élèves, les professeurs et l'administration :
    - Emplois du temps
    - Rendez vous
    - Travail à faire
    - Contenue pédagogique
    - ...
3. Un Médiacentre :
    - Manuel Scolaire
    - Des cours et des ressources scolaire
    - ...
4. Un Onglet Bulletin :
    - Note par trimestre
    - Moyenne
    - Bulletin
    - Onglet Epreuve (Controle continue)
    - ...
5. Un Onglet Utilisateur :
    - Coordonnées
    - Apparence / Paramètre
    - ...
6. Un Onglet de Connexion :
    - Obligatoire pour accéder aux restes de l'application
    - Connexion Administration / Eleves
    - Identifiant et Mot de Passe (prédéfinis)
    - ...
7. Compte Administrateur :
    - Rentrer des notes pour les Elèves
    - Rentrer son appréciation globale, seulement pour sa matière
    - Rentrer des devoirs dans l'Agenda
    - ...
8. Onglet Communication :
    - Messagerie / Mail
    - ...
9. Onglet Information :
    - Information pour élèves
    - Information sur l'établissement
    - Horaire Permanence, Foyer et CDI
    - Club
    - Carte de priorité passage cantine
    - Menu de cantine
    - Sortie pédagogique

### Contraintes

- La première contrainte, est la **contrainte de temps**, nous avons jusqu'au _mois de Février_ pour compléter le projet, et avant le _29 Mars 2024_ pour le soumettre aux "Trophées NSI".
- Il n'y a **aucun financement économiques** étant donnée que ce dernier est un _projet scolaire et non rémunéré._
- Il y a une **contrainte numérique**, nous sommes _une équipe de 3 élèves_, en pleine étude.
- Il y a également une contrainte de temps sur les **scéances pour travailler sur le projet.** _1 seule scéance par semaine_ est consacré en cours pour travailler sur ce projet, le reste est à faire en _autonomie._

## Spécifications fonctionnelles

### Cas d'utilisation

C'est une utilisation scolaire et administrative, un peu comme Pronot en gros. Utilsier pour consulter des mails scolaire, jouer avec l'IA, rentrer des notes, des bulletins, consulter son parcours scolaire, ses devoirs à faire, trouver des ressources pédagogiques...

## Spécifications techniques

### Plateforme cible

La plateforme cible est _un ordinateur_, car cette application web à pour utilisation personnelle et bureautique, mais cette dernière en cas de manque de temps, sera utilisé sur un navigateur web.

### Langages de programmation et technologies

On utilise de multiple langage de programmation et technologie :
- **HTML**, pour la structure du document. _(Frontend)_
- **CSS**, pour stylisé et pour l'apparence de l'application. _(Frontend)_
- **JS**, pour l'interaction utilisateur et data. _(Backend, Frontend)_
- **SQL**, pour la gestion de base de données.
- **CSV**, pour les données internes à l'application.
- **Python**, pour la programmation de fonction utilitaire, pour les petits jeux de l'IA. _(Backend)_
- **JSON**, pour certaine configuration notemment les configurations propres à VSC.
- **Visual Studio Code**, pour développé l'application sur un éditeur de texte moderne.
- **Figma**, pour développé le design et l'apparence de l'application.

### Base de données

- On va utiliser une base de donnée SQL que l'on nommera "copi_tache_pronot" :
    1. Une base de donnée pour l'IA :
        - Mots spécifiques
        - Jeu
        - Message prédéfini
    2. Une base de donnée pour les notes :
        - Note par élève, par trimestre
        - Bulletin
        - Note obtenue aux épreuves
        - Calcul de moyenne pour l'année scolaire, pour les épreuves
    3. Une base de donnée pour l'agenda :
        - Les différents emplois du temps
        - Rendez vous et évenements
        - Travail à faire
        - Ressources soumis par les professeurs
    4. Une base de donnée pour Médiacentre :
        - Les différents manuels
        - Les différents cours
    5. Une base de données pour les Utilisateurs
        - Informations sur les utilisateurs
        - Paramètre application
        - Identifiant et Mot de passe crypter
    6. Une base de données pour la Communication
        - Mail, et message
        - Sondage et Evenement
    7. Une base de donnée pour les informations
        - Blog et Information
        - Sortie et Evenement
        - Priorité Cantine
        - Menu Cantine
        - Horaie et Club

## Interface utilisateur

### Conception de l'interface

Retrouvez les maquettes de design et de conception de l'interface utilisateur en suivant **ce projet Figma :** [Figma • Design Project NSI](https://www.figma.com/file/nNCZOfIPNOUPI9N27aPz9A/Design?type=design&node-id=0%3A1&mode=design&t=cflTps9Oe94GDij9-1)

## Sécurité

### Gestion des accès

La gestion des accès à l'application se ferra à l'aide _d'un identifiant et d'un mot de passe prédéfinis_ qui sera fournis pour la connexion. Ces derniers pourront être modifier par l'utilisateur sur son propre client. La gestion des données sera cependant locale pour le moment, étant donné que l'on ne dispose pas de serveur pour héberger nos bases de données.

### Sécurité des données

Concernant la sécurité des données, la plus part **des données "fragiles" et de "haute importance"** seront _chiffrer et crypter par un programme que l'on aura conçu_ dont seul nous avons la clé du fonctionnement du système. Nous aurions pu également crypter et chiffrer le programme qui se chargera de crypter et decrypter les données, mais ils faudraient se servir d'un Framework qui n'est pas vu en classe de NSI.

## Gestion de projet

### Équipe de projet

1. Nous avons **KEISER Kenan**, notre _Chef de Projet_. Il s'occupe de donné les directives, distribué les tâches entre les membres et de mettre sa main à la cuisine dans le projet.
2. Nous avons **MOULIAS Eyden**, notre _Secrétaire en Chef_. Il s'occupe de prendre en note le Carnet de bord du projet, les fichiers comme le Cahier des charges et la soutenance orale et lui aussi met sa main à la cuisine dans le projet.
3. Nous avons **MOUTARDE Kyllian**, notre _Documentaliste_. Il s'occupe de faire des recherches internet et de prendre en note la documentation du Projet, notemment comment est structuré le projet, comment fonctionne les fonctions ect... Lui aussi met la main à la cuisine dans le projet.

### Calendrier

1. **Phase 1 :** _Mardi 16 Janvier 2024 à Lundi 22 Janvier 2024_
    - Début du Projet
    - Conception des Equipes
    - Conception de l'idée
    - Conception du Cahier des Charges
    - Conception du Carnet de Bord
    - Travail en Autonomie
2. **Phase 2 :** _Mardi 23 Janvier 2024 à Lundi 29 Janvier 2024_
    - Conception de la Planche de Design
    - Conception du Squelette de l'Application
    - Conception des premières Pages Web
    - Travail en Autonomie
3. **Phase 3 :** _Mardi 30 Janvier 2024 à Lundi 5 Février 2024_
    - Système de Cryptage
    - Fonction utilitaire
    - Module (tel que l'IA)
    - Travail en Autonomie
4. **Phase 4 :** _Mardi 6 Février 2024 à Lundi 12 Février 2024_
    - Développement Pre-Final du rendu du site Web
    - Configuration nécessaire pour l'Application
    - Développement des bases de données
    - Travail en Autonomie
5. **Phase 5 :** _Mardi 13 Février 2024 à Lundi 19 Février 2024__
    - Phase Finale
    - Finalisation du Projet
    - Convertion du Site en Application
    - Travail en Autonomie
6. **Phase 6 :** _Mardi 20 Février 2024 à Vendredi 23 Février 2024_
    - Dernière ligne droite
    - Finalisation du Projet
    - Convertion du site en Application
    - Travail en Autonomie
    - Fin du Projet

## Approbation

### Commentaire du Professeur et Approbation

->

### Signature des Membres de l'Equipe

- Je sousigné MOUTARDE Kyllian, le 16 Janvier 2024
- 
- 
