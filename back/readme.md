## Groupomania - Projet 7 de la formation développeur web OPC

Vous êtes actuellement sur le backend du projet.

### Technologies utilisées pour le backend

- Node.js
- Express
- JsonWebToken
- Multer
- Base de données SQL hébergé sur PlanetScale
- Prisma comme outil ORM afin de simplifier le code

### Procédure pour lancer le projet sur votre machine

1. Cloner le repo github
2. Effectuer la commande `npm intall` à la racine du projet
3. Renommer le fichier `.env dev` en `.env`
4. Remplissez-le avec vos variables d'environnement personnelles
5. Executez la commande `npm run dev` dans le terminal côté back et front

### Guide d'utilisation de Prisma pour intéragir avec la base de données

Les schémas de la base de données se trouve dans le fichier `schema.prisma`

Si vous souhaitez apporter des modifications, vous devrez exécuter la commande suivante `npx prisma db push` après vos opérations.