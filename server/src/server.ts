import Fastify from 'fastify'

async function bootstrap(){
  const fastify = Fastify({
    logger: true,
  })

  //rotas

  await fastify.listen({ port:3333 })

}

bootstrap()