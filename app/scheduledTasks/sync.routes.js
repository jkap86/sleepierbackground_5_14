'use strict'

module.exports = app => {
    const syncs = require("../controllers/sync.controller.js");

    syncs.boot(app)

    syncs.leaguemates(app)

    syncs.trades(app)

    setTimeout(() => {
        syncs.userTrades(app)
    }, 15000)
}