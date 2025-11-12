import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "This page is rendered with Nunjucks",
        message: "What a wonderful world, we're living in!"
    })
})

router.get("/story", (req, res) => {
    res.render("story.njk", {
    })
})

export default router