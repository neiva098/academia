import { Request, Response, Router } from 'express'

import userRoutes from './user'

const apiRoutes = Router()

apiRoutes.get('/', (req: Request, res: Response) => {
    res.send('Academia Service full cracked 2k88')
})

apiRoutes.use('/clientes', userRoutes)

export default apiRoutes