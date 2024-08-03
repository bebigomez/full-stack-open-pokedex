const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error... ')
  res.send('okay')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`); // eslint-disable-line
})
