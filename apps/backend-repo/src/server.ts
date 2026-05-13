import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { db } from "./firebase"
import { authMiddleware } from "./authMiddleware"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
  res.json({
    message: "Backend running"
  })
})

app.get(
  "/fetch-user-data",
  authMiddleware,
  async (_, res) => {

    try {

      const snapshot = await db
        .collection("USERS")
        .get()

      const users = snapshot.docs.map((doc) => doc.data())

      res.json(users)

    } catch (error) {

      res.status(500).json({
        error: "Failed to fetch users"
      })
    }
  }
)

app.post(
  "/update-user-data",
  authMiddleware,
  async (req, res) => {

    try {

      const data = req.body

      await db
        .collection("USERS")
        .doc(data.uid)
        .set(data)

      res.json({
        success: true,
        data
      })

    } catch (error) {

      res.status(500).json({
        error: "Failed to update user"
      })
    }
  }
)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
