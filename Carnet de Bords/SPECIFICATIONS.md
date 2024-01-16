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
    1. Capable de calculer la moyenne des élèves
    2. Capable de remonter le morale des élèves en leur racontant une blague
    3. Lancer des petit jeu
    4. Dialoguer
    5. Pas d'Historique dans le temps
    6. ...
2. Un Agenda pour les élèves, les professeurs et l'administration :
    1. Emplois du temps
    2. Rendez vous
    3. Travail à faire
    4. Contenue pédagogique
    5. ...
3. Un Médiacentre :
    1. Manuel Scolaire
    2. Des cours et des ressources scolaire
    3. ...
4. Un Onglet Bulletin :
    1. Note par trimestre
    2. Moyenne
    3. Bulletin
    4. Onglet Epreuve (Controle continue)
    5. ...
5. Un Onglet Utilisateur :
    1. Coordonnées
    2. Apparence / Paramètre
    3. ...
6. Un Onglet de Connexion :
    1. Obligatoire pour accéder aux restes de l'application
    2. Connexion Administration / Eleves
    3. Identifiant et Mot de Passe (prédéfinis)
    4. ...
7. Compte Administrateur :
    1. Rentrer des notes pour les Elèves
    2. Rentrer son appréciation globale, seulement pour sa matière
    2. Rentrer des devoirs dans l'Agenda
    3. ...
8. Onglet Communication :
    1. Messagerie / Mail
    2. ...
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
    - **Visual Studio Code**, pour développé l'application sur un éditeur de texte moderne.
    - **Figma**, pour développé le design et l'apparence de l'application.

### Base de données

- On va utiliser une base de donnée SQL que l'on nommera "copi_tache_pronot" :
    1. Une base de donnée pour l'IA :
        1. Mots spécifiques
        2. Jeu
        3. Message prédéfini
    2. Une base de donnée pour les notes :
        1. Note par élève, par trimestre
        2. Bulletin
        3. Note obtenue aux épreuves
        4. Calcul de moyenne pour l'année scolaire, pour les épreuves
    3. Une base de donnée pour l'agenda :
        1. Les différents emplois du temps
        2. Rendez vous et évenements
        3. Travail à faire
        4. Ressources soumis par les professeurs
    4. Une base de donnée pour Médiacentre :
        1. Les différents manuels
        2. Les différents cours
    5. Une base de données pour les Utilisateurs
        1. Informations sur les utilisateurs
        2. 
    6. 

## Interface utilisateur
5.1 Conception de l'interface
[Incluez des maquettes ou des descriptions détaillées de l'interface utilisateur.]

5.2 Expérience utilisateur
[Décrivez l'expérience utilisateur attendue et les principaux éléments d'interaction.]

6. Sécurité
6.1 Gestion des accès
[Décrivez les mécanismes de gestion des accès et d'authentification.]

6.2 Sécurité des données
[Spécifiez les mesures de sécurité mises en place pour protéger les données de l'utilisateur.]

7. Plan de développement
7.1 Phases de développement
[Phase 1: Définition des besoins]
[Phase 2: Conception]
[Phase 3: Développement]
...
7.2 Livrables
[Listez les livrables attendus à la fin de chaque phase.]

8. Gestion de projet
8.1 Équipe de projet
[Listez les membres de l'équipe de projet et leurs rôles.]

8.2 Calendrier
[Élaborez un calendrier prévisionnel du projet, y compris les dates de début et de fin de chaque phase.]

9. Budget
9.1 Coûts estimés
[Estimez les coûts liés au développement de l'application, y compris les coûts de main-d'œuvre, d'hébergement, etc.]

10. Validation et tests
10.1 Critères de validation
[Décrivez les critères qui seront utilisés pour valider que l'application répond aux exigences spécifiées.]

10.2 Plan de tests
[Élaborez un plan de tests détaillé, y compris les scénarios de tests, les outils utilisés, etc.]

11. Maintenance et support
11.1 Maintenance future
[Décrivez les plans de maintenance future de l'application, y compris les mises à jour, les correctifs de bugs, etc.]

11.2 Support client
[Spécifiez les modalités de support client après le déploiement de l'application.]

12. Approbation
[Placez ici un espace pour les signatures et les dates d'approbation des parties concernées.]

N'oubliez pas d'adapter ce modèle en fonction des besoins spécifiques de votre projet. Vous pouvez également ajouter des sections supplémentaires si nécessaire.