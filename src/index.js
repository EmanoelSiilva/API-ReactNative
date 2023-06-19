const express = require('express')
const routes = require('./routes')
const User = require('./models/User')
const app = express()
const cors = require('cors')

require('./database')

app.use(express.json())
app.use(routes)
app.use(cors())

app.get('/', (req, res) => {
    res.json({msg: "Salve!"})
})

app.post('/create', async(req,res) => {
    try {
        let reqs = await User.create({
            name: req.body.nameUser,
            password: req.body.passwordUser,
            email: req.body.emailUser,
            created_at: new Date(),
            updated_at: new Date()
        });

        res.status(200).json(reqs)
    } catch (error) {
        res.json({msg: error.message})
    }
});


app.listen(3000)