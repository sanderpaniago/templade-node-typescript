import express from 'express'

const routes = express.Router()

routes.get('/', (req, res)=> {
    res.send('rota acessada')
})

export default routes