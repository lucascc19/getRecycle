import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

async function main(){
  const user = await prisma.user.create({
    data: {
      name: 'Rosario Rodrigues',
      email: 'rosario@rodrigues.com'
    }
  })
}