const { createBlog, fetchAllBlogs, fetchSingleBlog } = require("../controllers/blogController")

const router = require("express").Router()

router.route("/create").post(createBlog)
router.route("/").get(fetchAllBlogs)
router.route("/single/:id").get(fetchSingleBlog)






module.exports = router