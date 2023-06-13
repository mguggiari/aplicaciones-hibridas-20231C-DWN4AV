import * as services from '../../services/account.service.js'
import * as tokenService from '../../services/token.service.js'
import * as profileService from '../../services/profile.service.js'

async function createAccount(req, res) {
    return services.createAccount(req.body)
        .then(() => {
            res.status(201).json({ message: "Cuenta creada correctamente." })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function createProfile(req, res) {
    return profileService.createProfile(req.account, req.body)
        .then(() => {
            res.status(201).json({ message: "Perfil creado correctamente." })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function getProfile(req, res) {
    return profileService.getProfile(req.account._id)
        .then((profile) => {
            res.status(200).json(profile)
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


async function login(req, res) {
    return services.login(req.body)
        .then(async (account) => {
            return { token: await tokenService.createToken(account), account }
        })
        .then((auth) => {
            res.status(200).json(auth)
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}

async function logout(req, res) {
    const token = req.headers['auth-token']

    return tokenService.removeToken(token)
        .then(() => {
            res.status(200).json({ message: "Sesion cerrada correctamente." })
        })
        .catch((err) => {
            res.status(400).json({ error: { message: err.message } })
        })
}


export {
    createAccount,
    createProfile,
    getProfile,
    login,
    logout
}