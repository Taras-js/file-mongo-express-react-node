const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const app = express()
app.use(express.json({extended: true}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/images', require('./routes/images.routes'))
const PORT = config.get('port') || 5000
async function start () {
    try {
        await mongoose.connect(config.get('mongoUri'), {
        })
        app.listen(PORT, () => console.log(`App is started on port ${PORT}...`))
    }
    catch (e) {
        console.log("server error", e.message)
        process.exit(1)
    }
}
start()

