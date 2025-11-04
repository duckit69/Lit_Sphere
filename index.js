const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200).json({message: "Hello World!"})
})

conn = "mongodb+srv://duckit69:<db_password>@cluster0.azylwdt.mongodb.net/?appName=Cluster0"

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
