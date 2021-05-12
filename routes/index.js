const router = require("express").Router()

router.use("/", require("./home-routes"))

router.use("/api", require("./api"))

module.exports= router 