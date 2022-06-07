const mockHash = "$2b$10$7rf0xJvCblHr/n64haNJq.OfuP0mKMPYDyFZTvbsd69HKsec5/fRq"

/* - - - - - BASE DE DONNEES - - - - - */
const user1 = {email: "user1@hotmail.fr", password: mockHash}
const user2 = {email: "user2@hotmail.fr", password: mockHash}
const user3 = {email: "user3@hotmail.fr", password: mockHash}
const users = [user1, user2, user3]

// Mise en place de Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = { users, prisma };