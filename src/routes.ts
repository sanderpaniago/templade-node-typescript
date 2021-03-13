import express from 'express'

const routes = express.Router()

routes.get('/', (req, res)=> {
    res.send('rota acessada com docker')
})

export default routes