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
  fastify.post('/users/create', async (request) => {
    const {email, name} = request.body;

    const user = await prisma.user.create({
      data: {
        email: email,
        name: name
      }
    })

    return { user }
  });


  fastify.post('/collection-points/create', async (request) => {
    const {location, pontid, autorid} = request.body;

    const collectionPoint = await prisma.points.create({
      data: {
	      location: location,
        pointId:pontid,
        authorId: autorid
      }
    })

    return { collectionPoint }
  })



  await fastify.listen({ port:3333 })

}

bootstrap()
