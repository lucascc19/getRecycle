import Fastify, { fastify } from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  //log de todas as queries executadas no banco de dados (debugar).
  log: ['query'],
})

async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  //permite qualquer aplicação acessar o nosso banck-end
  await fastify.register(cors, {
    origin: true,
  })

  //rotas
  fastify.get('/users/count', async () => {
    const users = await prisma.user.count()
    const points = await prisma

    return { users }
  })



  await fastify.listen({ port:3333 })

}

bootstrap()