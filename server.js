import express from "express"
import nunjucks from "nunjucks"
import indexRouter from "./routes/index.js"
import storyRouter from "./routes/story.js"
const app = express()


app.use(express.static("public"))


nunjucks.configure("views", {
  autoescape: true,
  express: app
})

app.use("/", indexRouter)
app.use("/story", storyRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
