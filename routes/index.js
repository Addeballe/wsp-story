import express from "express"
const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
    })
})

router.get("/story", (req, res) => {
    res.render("story.njk", {
    })
})

export default router