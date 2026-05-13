"use client"

import { useState } from "react"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function Home() {

  const [message, setMessage] = useState("")

  const fetchUser = async () => {

    try {

      setMessage("Loading...")

      const response = await fetch(
        "http://localhost:5000/fetch-user-data",
        {
          headers: {
            Authorization: "token"
          }
        }
      )

      const data = await response.json()

      console.log(data)

      setMessage("Success fetching user data")

    } catch (error) {

      setMessage("Error fetching user data")
    }
  }

  return (
    <Box
      sx={{
        padding: 5
      }}
    >

      <Typography variant="h4">
        EBUDDY FULLSTACK TEST
      </Typography>

      <Button
        variant="contained"
        sx={{ marginTop: 3 }}
        onClick={fetchUser}
      >
        Fetch User Data
      </Button>

      <Typography sx={{ marginTop: 3 }}>
        {message}
      </Typography>

    </Box>
  )
}
