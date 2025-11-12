import express from "express"
const router = express.Router()

router.get("/story", (req, res) => {
    res.render("story.njk", {
    })
})

router.get("/storypage", (req, res) => {
    const id = req.params.id
    console.log(id)
    res.render("story-page.njk", {
        title: "Story Page"
        })
})

export default router   