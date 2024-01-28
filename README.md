# Front-end Exam

## Features

This template comes with the following features:
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/) - ORM
- tRPC (https://trpc.io/) - APIs
- Mantine UI(https://mantine.dev/) - UI Framework
- MySQL - Database

## Steps for initializing

* Create a database in MySQL named **exam**
* Create and .env file - Please use the .env.sample file for reference
* Install all dependencies using **npm install**
* Initiate prisma using **npx prisma migrate dev --name init**
* Generate prisma client dependency using **npx prisma generate**
* Start the development server using **npm run dev**

## Notes
Editing and Deletion of referrals is not implemented as the instructions of the exam requires only the Create Referral functionality
