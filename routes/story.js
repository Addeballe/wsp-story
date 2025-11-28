import fs from "fs"
import express from "express"
const router = express.Router()
const storyData = JSON.parse(fs.readFileSync("./story.json", "utf-8"))
const finePage = (id) => {
    return storyData.find(page => page.id === id)
}

router.get("/", (req, res) => {
    res.render("story.njk", {
    })
})

router.get("/:id", (req, res) => {
    const id = req.params.id
    const page = finePage(id)
    console.log(page)

    res.render("story-page.njk", {
        page
    })
})

export default router   