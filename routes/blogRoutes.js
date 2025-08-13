const { createBlog } = require("../controllers/blogController")

const router = require("express").Router()

router.route("/create").post(createBlog)






module.exports = router