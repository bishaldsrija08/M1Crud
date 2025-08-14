const Blog = require("../model/blogModel")
const mongoose = require('mongoose');

const createBlog = async (req, res) => {
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

const fetchAllBlogs = async (req, res) => {
    try {
        const isBlog = await Blog.find()
        if (isBlog.length == 0) {
            return res.status(404).json({
                message: "No blogs"
            })
        }

        return res.status(200).json({
            blog: isBlog
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error while fetching blog."
        });
    }
}

const fetchSingleBlog = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.status(400).json({
            message: "Blog ID is required."
        });
    }

    // ✅ Validate ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({
            message: "Invalid Blog ID format."
        });
    }

    try {
        const isBlog = await Blog.findById(id);

        if (!isBlog) {
            return res.status(404).json({
                message: "No blog found!"
            });
        }

        return res.status(200).json({
            blog: isBlog
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error while fetching blog."
        });
    }
};

module.exports = {
    createBlog,
    fetchAllBlogs,
    fetchSingleBlog
}