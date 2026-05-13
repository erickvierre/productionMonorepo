"use client"

import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { useState } from "react"

import { fetchUsers } from "../apis/userApi"

export default function UpdateButton() {

  const [message, setMessage] = useState("")

  const handleClick = async () => {

    try {

      setMessage("Loading...")

      const data = await fetchUsers()

      console.log(data)

      setMessage("Success fetching user")

    } catch (err) {

      setMessage("Error fetching user")
    }
  }

  return (
    <div>

      <Button
        variant="contained"
        onClick={handleClick}
      >
        Fetch User Data
      </Button>

      <Typography>
        {message}
      </Typography>

    </div>
  )
}
