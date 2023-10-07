# Formation Développeur Web

## P7-Kasa
Projet n°7 de la formation Developpeur Web OPENCLASSROOMS 

### Contexte :
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans. L'entreprise souhaite faire une refonte totale de son site web.

### Objectifs :
Développer l'ensemble de l'application et ses composants avec React, en suivant [les maquettes Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=3-0&t=orFKblhMVkLYD4Ie-0) fournies. Des composants réutilisables doivent être créés pour les onglets ouvrants et le carrousel de photo.
### Back-end / data :
voila [ce fichier JSON](https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json) pour construire le Front qui correspond.

### Cahiers des charges
#### Spécifications fonctionnelles:
Quelques précisions sur les fonctionnalités du site :

1. Pour le défilement des photos dans la galerie (composant Gallery) :
* Si l'utilisateur se trouve à la première image et qu'il clique sur "Image précédente", la galerie affiche la dernière image. 
* Inversement, quand l'image affichée est la dernière de la galerie, si l'utilisateur clique sur "Image suivante", la galerie affiche la première image. 
* S'il n'y a qu'une seule image, les boutons "Suivant" et "Précédent" n'apparaissent pas.
2. La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.
3. Collapse : Par défaut, les Collapses sont fermés à l'initialisation de la page. 
4. Si le Collapse est ouvert, le clic de l'utilisateur permet de le fermer.
Inversement, si le Collapse est fermé, un clic permet de l'ouvrir.
#### Spécifications techniques
1. Découper en composants modulaires et réutilisables
2. Structure logique des fichiers
3. Utilisations des évènements
4. Utiliser les listes en itérant dessus
5. Utilisation des props entre les composants
6. La page 404 est renvoyée pour chaque route inexistante, ou si une
valeur présente dans l’URL ne fait pas partie des données
renseignées

### Langages utilisés :
HTML5 / CSS3 / SASS / JavaScript / React
### Compétences acquises
* Développer les routes d'une application web avec React Router
* Initialiser une application web avec un framework
* Créer des composants avec React
### Informations complémentaires
* Visiter le site web :
https://vanessa-lanquetin.github.io/kasa/
----------------------
# Installation

## Premiers pas avec l'application Create React
Ce projet a été lancé avec [Create React App](https://github.com/facebook/create-react-app)
