const Blog = require("../model/blogModel")

const createBlog = async (req,res) => {
    const { title, subTitle, description } = req.body

    try {
        if (!title || !subTitle || !description) {
            throw new Error("All fields are required")
        }
        Blog.create({
            title,
            subTitle,
            description
        })
        return res.status(201).json({
            message: "Blog created successfully."
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    createBlog
}