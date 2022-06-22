## Groupomania - Projet 7 de la formation développeur web OPC

Vous êtes actuellement sur le back-end du projet.

### Technologies utilisées pour le backend

- Node.js pour la gestion du serveur
- Express pour la mise en place de l'application
- JsonWebToken pour la création des tokens uniques
- Multer pour la gestion des images
- Bcrypt pour le hashage des mots de passe
- Dotenv pour la création d'un fichier de configuration contenant des variables d'environnement
- Base de données SQL hébergé sur PlanetScale
- Prisma comme outil ORM afin de simplifier le code

### Guide d'utilisation de Prisma pour intéragir avec la base de données

Les schémas de la base de données se trouve dans le fichier `schema.prisma`

Si vous souhaitez apporter des modifications, vous devrez exécuter la commande suivante `npx prisma db push` après vos opérations
