const { createBlog, fetchAllBlogs, fetchSingleBlog, updateBlog, deleteBlog } = require("../controllers/blogController")

const router = require("express").Router()

router.route("/create").post(createBlog)
router.route("/").get(fetchAllBlogs)
router.route("/single/:id").get(fetchSingleBlog)
router.route("/update/:id").patch(updateBlog)
router.route("/delete/:id").delete(deleteBlog)



module.exports = router