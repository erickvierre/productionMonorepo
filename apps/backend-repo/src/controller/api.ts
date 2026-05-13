import { Request, Response } from "express"
import { db } from "../config/firebaseConfig"

export const updateUserData = async (
  req: Request,
  res: Response
) => {

  try {

    const data = req.body

    await db
      .collection("USERS")
      .doc(data.uid)
      .set(data)

    res.json({
      success: true
    })

  } catch (err) {

    res.status(500).json({
      error: err
    })
  }
}

export const fetchUserData = async (
  req: Request,
  res: Response
) => {

  try {

    const snapshot = await db
      .collection("USERS")
      .get()

    const users = snapshot.docs.map(doc => doc.data())

    res.json(users)

  } catch (err) {

    res.status(500).json({
      error: err
    })
  }
}
