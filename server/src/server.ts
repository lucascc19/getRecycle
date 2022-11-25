import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  //log de todas as queries executadas no banco de dados (debugar).
  log: ['query'],
})

async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  //rotas
  fastify.get('recycle/users', async () => {
    const recycle = await prisma.user.findMany({
      where:{
        name: {
          startsWith: 'L'
        }
      }
    })

    return { recycle }
  })

  await fastify.listen({ port:3333 })

}

bootstrap()