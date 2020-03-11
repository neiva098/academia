import app from './app'
import * as mongoose from 'mongoose'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const PORT = process.env.PORT || 3000

export const mongoURI = process.env.MONGODB_URI

const listen = () => {
    app.listen(PORT, () => {
        console.log(`Listening at http://localhost:${PORT}/`)
    })
}

const connect = () => {
    mongoose.connection
        .on('error', console.log)
        .on('disconnected', connect)
        .once('open', listen)
    return mongoose.connect(mongoURI!, {
        keepAlive: true, useNewUrlParser: true, useUnifiedTopology: true,
    })
}

connect()
