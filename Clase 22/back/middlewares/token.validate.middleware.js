import * as tokenService from '../services/token.service.js'

async function tokenVerify(req, res, next) {
    const token = req.headers['auth-token']

    if (!token) {
        return res.status(401).json({ error: { message: "No se ha enviado el token" } })
    }

    const account = await tokenService.verifyToken(token)

    if (!account) {
        return res.status(401).json({ error: { message: "Token invalido" } })
    }

    req.account = account

    next()
}

export {
    tokenVerify
}