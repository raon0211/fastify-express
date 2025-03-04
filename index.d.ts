import { Application } from 'express'
import { FastifyPluginCallback } from 'fastify'

declare module 'fastify' {
  interface FastifyInstance {
    /**
     * Express middleware function
     */
    use: Application['use']

    /**
     * Express application instance
     */
    express: Application
  }
}

declare const fastifyExpress: FastifyPluginCallback

export default fastifyExpress
