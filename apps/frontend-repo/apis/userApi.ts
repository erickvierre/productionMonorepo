export const fetchUsers = async () => {

  const res = await fetch(
    "http://localhost:5000/fetch-user-data",
    {
      headers: {
        Authorization: "token"
      }
    }
  )

  return await res.json()
}
