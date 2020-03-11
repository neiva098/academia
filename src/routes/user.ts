import { NextFunction, Request, Response, Router } from 'express'
import { insertUser } from '../controllers/user'

const routes = Router()

routes.post('/insertCliente', async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body
    const insertResult = await insertUser(data)

    return res.status(200).json({
        success: insertResult.length === 1
    })

})

export default routes