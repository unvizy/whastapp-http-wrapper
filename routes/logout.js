const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { Client } = require('../utils/client')
const { consola } = require('consola')
const fs  = require('fs')

router.get(
    '/',
    async (req, res) => {
        try {
            await Client.logout()
            return res.json({
                        status: 'success',
                        message: 'Success logout',
                        data: {}
                    })
        }catch (error) {
            return res.json({
                status: 'error',
                message: 'error while logout',
                data: {error}
            })
        }
    })

module.exports = router